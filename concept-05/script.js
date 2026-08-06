/* ----------------------------------------------------
   CONCEPT 05: DARK LUXURY - JAVASCRIPT LOGIC
   RWEN Interiors - Premium Redesign
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Radial Cursor Glow Follower
    const cursorGlow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        }
    });

    // 2. Lighting Atmosphere Mode Toggle
    const btnNight = document.getElementById('btn-night-mode');
    const btnDay = document.getElementById('btn-day-mode');
    const lightingImg = document.getElementById('lighting-img');
    const lightingCaption = document.getElementById('lighting-caption');

    btnNight?.addEventListener('click', () => {
        btnNight.classList.add('active');
        btnDay?.classList.remove('active');

        if (lightingImg) {
            lightingImg.style.filter = 'brightness(0.7) contrast(1.2) sepia(0.2)';
        }
        if (lightingCaption) {
            lightingCaption.innerHTML = '<span>MODE: NIGHT OBSIDIAN</span><p>Warm cove LED lighting, brass accents, velvet shadows.</p>';
        }
    });

    btnDay?.addEventListener('click', () => {
        btnDay.classList.add('active');
        btnNight?.classList.remove('active');

        if (lightingImg) {
            lightingImg.style.filter = 'brightness(1.1) contrast(1.0) sepia(0.0)';
        }
        if (lightingCaption) {
            lightingCaption.innerHTML = '<span>MODE: DAYLIGHT SANCTUARY</span><p>High natural illumination, crisp alabaster walls, clear glass reflection.</p>';
        }
    });

    // 3. Swiper Portfolio Carousel
    if (typeof Swiper !== 'undefined') {
        new Swiper('.dark-portfolio-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            },
            pagination: { el: '.swiper-pagination', clickable: true }
        });
    }

    // 4. GLightbox Init
    if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
    }
});
