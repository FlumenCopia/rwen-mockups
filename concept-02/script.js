/* ----------------------------------------------------
   CONCEPT 02: WARM SCANDINAVIAN - JAVASCRIPT LOGIC
   RWEN Interiors - Premium Redesign
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Preloader simulation
    const preloader = document.getElementById('preloader');
    const progressVal = document.getElementById('progress-val');

    let count = 0;
    const timer = setInterval(() => {
        count += 10;
        if (progressVal) progressVal.textContent = count + '%';
        if (count >= 100) {
            clearInterval(timer);
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
        }
    }, 40);

    // 2. Interactive Room Switcher Hero
    const switchBtns = document.querySelectorAll('.switch-btn');
    const roomImg = document.getElementById('room-img');
    const roomTitle = document.getElementById('room-title');
    const roomDesc = document.getElementById('room-desc');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const bgUrl = btn.getAttribute('data-bg');
            const title = btn.getAttribute('data-title');
            const desc = btn.getAttribute('data-desc');

            if (roomImg) {
                roomImg.style.opacity = '0';
                setTimeout(() => {
                    roomImg.src = bgUrl;
                    roomImg.style.opacity = '1';
                }, 250);
            }
            if (roomTitle) roomTitle.textContent = title;
            if (roomDesc) roomDesc.textContent = desc;
        });
    });

    // 3. Interactive Moodboard Material Selector
    const matCards = document.querySelectorAll('.mat-select-card');
    const moodboardImg = document.getElementById('moodboard-img');
    const moodboardTitle = document.getElementById('moodboard-title');
    const moodboardDesc = document.getElementById('moodboard-desc');

    matCards.forEach(card => {
        card.addEventListener('click', () => {
            matCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const imgSrc = card.getAttribute('data-img');
            const title = card.querySelector('h4').textContent;
            const desc = card.querySelector('small').textContent;

            if (moodboardImg) {
                moodboardImg.style.opacity = '0.3';
                setTimeout(() => {
                    moodboardImg.src = imgSrc;
                    moodboardImg.style.opacity = '1';
                }, 200);
            }
            if (moodboardTitle) moodboardTitle.textContent = title;
            if (moodboardDesc) moodboardDesc.textContent = desc;
        });
    });

    // 4. 3D Card Tilt Effect on Mouse Move
    const tiltCards = document.querySelectorAll('.card-tilt');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // 5. GLightbox & Swiper Initializations
    if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
    }

    if (typeof Swiper !== 'undefined') {
        new Swiper('.scandi-swiper', {
            slidesPerView: 1,
            loop: true,
            autoplay: { delay: 4000 },
            pagination: { el: '.swiper-pagination', clickable: true }
        });
    }
});
