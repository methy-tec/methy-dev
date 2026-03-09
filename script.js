  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .project-card, .skill-card, .stat').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px'; cursor.style.height = '16px';
      ring.style.width = '48px'; ring.style.height = '48px';
      ring.style.borderColor = 'rgba(0,229,192,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px'; cursor.style.height = '8px';
      ring.style.width = '32px'; ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0,229,192,0.4)';
    });
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Scroll fade-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));