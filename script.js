/* ----------------------------------------------------
   MASTER LAUNCHER PORTAL - JAVASCRIPT LOGIC
   RWEN Interiors - 5 Award-Winning Concepts Showcase
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.c-tab');
    const iframe = document.getElementById('preview-iframe');
    const urlDisplay = document.getElementById('live-url-display');
    const btnOpenTab = document.getElementById('btn-open-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const src = tab.getAttribute('data-src');
            if (iframe) iframe.src = src;
            if (urlDisplay) urlDisplay.textContent = src;
            if (btnOpenTab) btnOpenTab.href = src;
        });
    });
});
