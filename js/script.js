const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

const setActiveNavLink = (hash) => {
  if (!nav) return;

  nav.querySelectorAll('a:not(.nav-cta)').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
};

if (nav) {
  const currentHash = window.location.hash || '#inicio';
  setActiveNavLink(currentHash);

  window.addEventListener('hashchange', () => {
    setActiveNavLink(window.location.hash || '#inicio');
  });

  nav.querySelectorAll('a:not(.nav-cta)').forEach((link) => {
    link.addEventListener('click', () => setActiveNavLink(link.getAttribute('href')));
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.textContent = opened ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}
