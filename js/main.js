(function () {
  const CLOSE_DELAY = 320;

  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    let closeTimer = null;

    function open() {
      clearTimeout(closeTimer);
      dropdown.classList.add('open');
    }

    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        dropdown.classList.remove('open');
      }, CLOSE_DELAY);
    }

    dropdown.addEventListener('mouseenter', open);
    dropdown.addEventListener('mouseleave', scheduleClose);
    menu.addEventListener('mouseenter', open);
    menu.addEventListener('mouseleave', scheduleClose);

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
      });
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
  }
})();
