/* ----------------------------------------------------
   CONCEPT 03: EDITORIAL MAGAZINE - JAVASCRIPT LOGIC
   RWEN Interiors - Premium Redesign
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Off-Canvas Monograph Drawer
    const openDrawerBtn = document.getElementById('open-case-drawer');
    const closeDrawerBtn = document.getElementById('close-case-drawer');
    const closeDrawerX = document.getElementById('close-drawer-x');
    const caseDrawer = document.getElementById('case-drawer');

    const toggleDrawer = () => {
        caseDrawer?.classList.toggle('active');
        document.body.style.overflow = caseDrawer?.classList.contains('active') ? 'hidden' : 'auto';
    };

    openDrawerBtn?.addEventListener('click', toggleDrawer);
    closeDrawerBtn?.addEventListener('click', toggleDrawer);
    closeDrawerX?.addEventListener('click', toggleDrawer);

    // 2. FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. GLightbox Init
    if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
    }
});
