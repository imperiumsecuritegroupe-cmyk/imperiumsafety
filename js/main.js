/* ============================================================
   IMPERIUM SAFETY SECURITY - Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Sticky Navbar ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
  }

  /* ---- Burger Menu ---- */
  const burger = document.querySelector('.navbar__burger');
  const navMenu = document.querySelector('.navbar__menu');
  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on backdrop click
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !burger.contains(e.target)) {
        burger.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 1024) {
          burger.classList.remove('active');
          navMenu.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ---- Dropdown (mobile toggle) ---- */
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector(':scope > a');
    if (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });

  /* ---- Smooth Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- Active Nav Link ---- */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar__menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Normalize paths for comparison
    const linkPath = href.replace(/^\.\.\//, '/').replace(/^\.\//, '/');
    const cleanCurrent = currentPath.split('/').pop() || 'index.html';
    const cleanLink = href.split('/').pop();
    if (cleanLink && cleanLink === cleanCurrent && cleanLink !== '#') {
      link.classList.add('active');
    }
  });

  /* ---- Intersection Observer: FadeIn ---- */
  const fadeEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ---- Animated Counter ---- */
  function animateCounter(el, target, duration) {
    const start = performance.now();
    const isFloat = String(target).includes('.');
    const increment = target / (duration / 16);
    let current = 0;
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      current = eased * target;
      el.textContent = isFloat
        ? current.toFixed(1)
        : Math.round(current).toLocaleString('fr-FR');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isFloat
        ? target.toFixed(1)
        : target.toLocaleString('fr-FR');
    }
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('.stat__number[data-target]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.getAttribute('data-target'));
            animateCounter(el, target, 1600);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(c => counterObserver.observe(c));
  }

  /* ---- Form Validation ---- */
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

      // Required fields
      form.querySelectorAll('[required]').forEach(field => {
        const group = field.closest('.form-group');
        if (!field.value.trim()) {
          valid = false;
          if (group) group.classList.add('has-error');
        }
      });

      // Email validation
      form.querySelectorAll('input[type="email"]').forEach(field => {
        const group = field.closest('.form-group');
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.value.trim() && !emailRe.test(field.value.trim())) {
          valid = false;
          if (group) group.classList.add('has-error');
        }
      });

      // Phone validation (basic)
      form.querySelectorAll('input[type="tel"]').forEach(field => {
        const group = field.closest('.form-group');
        const telRe = /^[+\d\s\-().]{7,}$/;
        if (field.value.trim() && !telRe.test(field.value.trim())) {
          valid = false;
          if (group) group.classList.add('has-error');
        }
      });

      if (valid) {
        const successMsg = form.querySelector('.form__success');
        if (successMsg) {
          successMsg.style.display = 'block';
          form.querySelectorAll('input, select, textarea').forEach(f => {
            if (f.type !== 'submit') f.value = '';
          });
          setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
        }
      }
    });
  });

  /* ---- Back to top (optional) ---- */
  // If a #back-to-top button exists
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
    }, { passive: true });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

});
