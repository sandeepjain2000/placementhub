(function () {
  try {
    var KEY = 'ph_fresh_session';
    var url = new URL(window.location.href);
    if (url.searchParams.has('_r')) {
      url.searchParams.delete('_r');
      history.replaceState(null, '', url.pathname + url.search + url.hash);
      sessionStorage.setItem(KEY, '1');
      return;
    }
    if (sessionStorage.getItem(KEY)) return;
    url.searchParams.set('_r', String(Date.now()));
    window.location.replace(url.toString());
  } catch (e) { /* ignore */ }
})();
