/* ----------------------------------------------------
   CONCEPT 04: MODERN ARCHITECTURAL STUDIO - JS LOGIC
   RWEN Interiors - Premium Redesign
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Spatial Hotspots Interaction
    const pins = document.querySelectorAll('.hotspot-pin');
    const popoverTitle = document.getElementById('popover-title');
    const popoverSpec = document.getElementById('popover-spec');

    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            const title = pin.getAttribute('data-title');
            const spec = pin.getAttribute('data-spec');

            if (popoverTitle) popoverTitle.textContent = title;
            if (popoverSpec) popoverSpec.textContent = spec;
        });
    });

    // 2. Interactive Calculator Estimator
    const calcType = document.getElementById('calc-type');
    const calcArea = document.getElementById('calc-area');
    const areaVal = document.getElementById('area-val');
    const calcTier = document.getElementById('calc-tier');
    const estTime = document.getElementById('est-time');
    const estGrade = document.getElementById('est-grade');

    function updateCalculator() {
        if (!calcArea || !estTime || !estGrade) return;

        const sqft = +calcArea.value;
        if (areaVal) areaVal.textContent = sqft;

        const type = calcType?.value || 'residential';
        const tier = calcTier?.value || 'premium';

        let weeks = Math.round(sqft / 250);
        if (type === 'commercial') weeks = Math.round(weeks * 0.85);
        if (type === 'render') weeks = Math.round(weeks * 0.25);
        if (weeks < 2) weeks = 2;

        estTime.textContent = `${weeks} - ${weeks + 4} Weeks`;
        estGrade.textContent = tier === 'ultra' ? 'Tier I Ultra-Monolith' : 'Tier II Signature Grade';
    }

    calcArea?.addEventListener('input', updateCalculator);
    calcType?.addEventListener('change', updateCalculator);
    calcTier?.addEventListener('change', updateCalculator);

    // Initial calculation
    updateCalculator();

    // 3. GLightbox Init
    if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
    }
});
