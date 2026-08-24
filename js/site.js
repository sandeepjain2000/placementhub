(function () {
  var form = document.getElementById('contact-form');
  var confirm = document.getElementById('contact-confirm');
  if (form && confirm) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('is-hidden');
      confirm.classList.add('is-visible');
    });
  }
})();

(function () {
  var BASE_COUNTS = {
    'placementhub-os-campus': 12,
    'implementation-roadmap': 72,
    'docker-containerization': 128,
    'mastering-git': 94,
    'security-tools-overview': 211,
    'cybersecurity-career': 176,
    'monitoring-tools': 63,
    'secure-coding-handbook': 149,
    'project-management': 87,
    'pm-introduction': 0,
    'risk-management': 0,
    'successful-business-models': 54,
    'strategic-hrm': 41,
    'computer-networks': 58,
    'deep-learning-midsem': 36,
    'dbms-introduction': 49,
    'machine-learning-masterclass': 180,
    'operating-systems-cpu-memory': 38
  };

  var LOCAL_STORAGE_KEY = 'phub_dl_increments_v1';
  var COUNTER_NAMESPACE = 'placementhub_online_v1';
  var API_BASE = 'https://api.counterapi.dev/v1/' + COUNTER_NAMESPACE + '/';

  function getLocalIncrements() {
    try {
      var data = localStorage.getItem(LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveLocalIncrement(resId) {
    try {
      var incs = getLocalIncrements();
      incs[resId] = (incs[resId] || 0) + 1;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(incs));
      return incs[resId];
    } catch (e) {
      return 1;
    }
  }

  function getEffectiveCount(resId, remoteVal) {
    var base = BASE_COUNTS[resId] || 0;
    var incs = getLocalIncrements();
    var localVal = base + (incs[resId] || 0);
    if (typeof remoteVal === 'number' && !isNaN(remoteVal) && remoteVal > 0) {
      return Math.max(localVal, remoteVal);
    }
    return localVal;
  }

  function updateUI(resId, count) {
    var card = document.querySelector('.resource-item[data-resource-id="' + resId + '"]');
    if (!card) return;
    var countEl = card.querySelector('.count-val');
    if (countEl) {
      countEl.textContent = count.toLocaleString();
    }
  }

  function initCounts() {
    var items = document.querySelectorAll('.resource-item[data-resource-id]');
    items.forEach(function (item) {
      var resId = item.getAttribute('data-resource-id');
      if (!resId || !(resId in BASE_COUNTS)) return;
      var current = getEffectiveCount(resId, null);
      updateUI(resId, current);
      fetch(API_BASE + encodeURIComponent(resId) + '/')
        .then(function (res) {
          if (res.ok) return res.json();
          return null;
        })
        .then(function (data) {
          if (data && typeof data.count === 'number') {
            updateUI(resId, getEffectiveCount(resId, data.count));
          }
        })
        .catch(function () {});
    });
  }

  function handleDownloadClick(resId) {
    if (!resId || !(resId in BASE_COUNTS)) return;
    saveLocalIncrement(resId);
    updateUI(resId, getEffectiveCount(resId, null));
    var card = document.querySelector('.resource-item[data-resource-id="' + resId + '"]');
    if (card) {
      var countEl = card.querySelector('.count-val');
      if (countEl) {
        countEl.style.transition = 'transform 0.2s ease, color 0.2s ease';
        countEl.style.transform = 'scale(1.35)';
        countEl.style.color = 'var(--primary-600)';
        setTimeout(function () {
          countEl.style.transform = 'scale(1)';
          countEl.style.color = '';
        }, 300);
      }
    }
    try {
      fetch(API_BASE + encodeURIComponent(resId) + '/up', {
        method: 'GET',
        mode: 'cors',
        keepalive: true
      })
        .then(function (res) {
          if (res.ok) return res.json();
          return null;
        })
        .then(function (data) {
          if (data && typeof data.count === 'number') {
            updateUI(resId, getEffectiveCount(resId, data.count));
          }
        })
        .catch(function () {});
    } catch (e) {}
  }

  function setupListeners() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[download]');
      if (!link) return;
      var card = link.closest('.resource-item[data-resource-id]');
      if (!card) return;
      handleDownloadClick(card.getAttribute('data-resource-id'));
    });
  }

  function setupResourceTabs() {
    var tabs = document.querySelectorAll('.resource-tab[data-filter]');
    var items = document.querySelectorAll('.resource-item[data-category]');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var filter = tab.getAttribute('data-filter') || 'all';
        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        items.forEach(function (item) {
          var show = filter === 'all' || item.getAttribute('data-category') === filter;
          item.classList.toggle('is-filtered-out', !show);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initCounts();
      setupListeners();
      setupResourceTabs();
    });
  } else {
    initCounts();
    setupListeners();
    setupResourceTabs();
  }
})();
