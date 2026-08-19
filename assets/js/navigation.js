(() => {
  const mobileNav = document.querySelector('.mobile-nav');
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#site-navigation');

  if (!mobileNav || !toggle || !navigation) return;

  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const desktopView = window.matchMedia('(min-width: 821px)');
  desktopView.addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
})();
