(function() {
  'use strict';

  // Mobile menu elements
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuLinks = document.querySelectorAll('.menu-link');
  const focusableSelector = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
  let lastActiveElement = null;

  function openMenu() {
    if (!menuOverlay || !menuBackdrop) return;
    lastActiveElement = document.activeElement;
    menuOverlay.classList.add('active');
    menuBackdrop.classList.add('active');
    menuOverlay.setAttribute('aria-hidden', 'false');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';

    const focusables = menuOverlay.querySelectorAll(focusableSelector);
    if (focusables.length) {
      focusables[0].focus();
    } else {
      menuOverlay.focus();
    }
  }

  // Close menu function
  function closeMenu() {
    if (!menuOverlay || !menuBackdrop) return;
    menuOverlay.classList.remove('active');
    menuBackdrop.classList.remove('active');
    menuOverlay.setAttribute('aria-hidden', 'true');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }
    if (e.key !== 'Tab' || !menuOverlay || !menuOverlay.classList.contains('active')) return;

    const focusables = menuOverlay.querySelectorAll(focusableSelector);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // Open menu
  if (menuToggle) {
    menuToggle.addEventListener('click', openMenu);
  }

  // Close menu on close button
  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  // Close menu on backdrop click
  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', closeMenu);
  }

  // Close menu on link click
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', handleKeydown);

  // Hero image tilt
  (function() {
    const hero = document.querySelector('.hero');
    const bg   = document.querySelector('.hero-bg');
    if (!hero || !bg) return;

    const FACTOR = 6;
    const EASE   = 0.07;

    let tx = 0, ty = 0;
    let cx = 0, cy = 0;
    let rafId;

    bg.style.willChange = 'transform';

    function tick() {
      cx += (tx - cx) * EASE;
      cy += (ty - cy) * EASE;
      bg.style.transform = `perspective(1200px) scale(1.08) rotateX(${cy}deg) rotateY(${cx}deg)`;
      rafId = requestAnimationFrame(tick);
    }

    hero.addEventListener('mousemove', function(e) {
      const r  = hero.getBoundingClientRect();
      const xp = (e.clientX - r.left)  / r.width  - 0.5;
      const yp = (e.clientY - r.top)   / r.height - 0.5;
      tx =  xp * FACTOR * 2;
      ty = -yp * FACTOR;
    });

    hero.addEventListener('mouseleave', function() {
      tx = 0;
      ty = 0;
    });

    tick();
  })();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = 80;
        window.scrollTo({
          top: target.offsetTop - navHeight,
          behavior: 'smooth'
        });
      }
    });
  });
})();
