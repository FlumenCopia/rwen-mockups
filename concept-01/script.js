/* ----------------------------------------------------
   CONCEPT 01: LIGHT MINIMAL LUXURY - JAVASCRIPT LOGIC
   RWEN Interiors - Premium Redesign
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Preloader Progress Simulation
    const progressBar = document.getElementById('progress-bar');
    const progressNum = document.getElementById('progress-num');
    const preloader = document.getElementById('preloader');

    let count = 0;
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 15) + 5;
        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            if (progressBar) progressBar.style.width = '100%';
            if (progressNum) progressNum.textContent = '100';

            setTimeout(() => {
                if (preloader) {
                    preloader.style.opacity = '0';
                    preloader.style.visibility = 'hidden';
                }
                initHeroAnimations();
            }, 400);
        } else {
            if (progressBar) progressBar.style.width = count + '%';
            if (progressNum) progressNum.textContent = count;
        }
    }, 50);

    // 2. Sticky Floating Navbar Shrink
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // 3. Fullscreen Drawer Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuDrawer = document.getElementById('menu-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    menuToggle?.addEventListener('click', () => {
        menuDrawer?.classList.toggle('active');
        document.body.style.overflow = menuDrawer?.classList.contains('active') ? 'hidden' : 'auto';
    });

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuDrawer?.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 4. Hero Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-num');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const step = Math.ceil(target / 40);

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = current;
                }
            }, 30);
        });
    }

    function initHeroAnimations() {
        if (typeof gsap !== 'undefined') {
            gsap.from('#hero-title .title-line', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
            gsap.from('.hero-subtitle', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out'
            });
            gsap.from('.hero-actions', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.6,
                ease: 'power3.out'
            });
        }
        animateCounters();
    }

    // 5. Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });

    // 6. Before / After Interactive Slider Drag
    const baSlider = document.getElementById('ba-slider');
    const imgBefore = document.getElementById('img-before');
    const baHandle = document.getElementById('ba-handle');

    if (baSlider && imgBefore && baHandle) {
        let isDragging = false;

        const moveSlider = (x) => {
            const rect = baSlider.getBoundingClientRect();
            let pos = ((x - rect.left) / rect.width) * 100;
            if (pos < 5) pos = 5;
            if (pos > 95) pos = 95;

            imgBefore.style.width = pos + '%';
            baHandle.style.left = pos + '%';
        };

        baSlider.addEventListener('mousedown', (e) => {
            isDragging = true;
            moveSlider(e.clientX);
        });

        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            moveSlider(e.clientX);
        });

        // Touch events
        baSlider.addEventListener('touchstart', (e) => {
            isDragging = true;
            moveSlider(e.touches[0].clientX);
        });

        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            moveSlider(e.touches[0].clientX);
        });
    }

    // 7. Lightbox Initialization
    if (typeof GLightbox !== 'undefined') {
        GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true
        });
    }

    // 8. Swiper Testimonials Slider
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // 9. Live Clock (GMT+5:30)
    function updateClock() {
        const clockEl = document.getElementById('live-clock');
        if (!clockEl) return;
        const now = new Date();
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        clockEl.textContent = 'Thiruvananthapuram (GMT+5:30) ' + now.toLocaleTimeString('en-US', options);
    }
    setInterval(updateClock, 1000);
    updateClock();
});
