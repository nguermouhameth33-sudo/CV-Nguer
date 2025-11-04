// Sequential reveal: reveal .title, .contact, .edu, .lang in document order
(function(){
    'use strict';

    const revealDelay = 700; // ms between reveals

    function revealSequentially(){
    const selector = '.profiltext h4, .title, .contact, .edu, .lang';
        const nodes = Array.from(document.querySelectorAll(selector));
        if (!nodes.length) return;

        let i = 0;
        function showNext(){
            if (i >= nodes.length) return;
            nodes[i].classList.add('seq-visible');
            i++;
            setTimeout(showNext, revealDelay);
        }

        // reset any previous state
        document.querySelectorAll('.seq-visible').forEach(n => n.classList.remove('seq-visible'));
        setTimeout(showNext, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', revealSequentially);
    } else {
        revealSequentially();
    }
})();

// Back to top button behavior
(function(){
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const showAfter = 200; // px scroll before showing

    function onScroll(){
        if (window.scrollY > showAfter) btn.classList.add('show');
        else btn.classList.remove('show');
    }

    function scrollToTop(e){
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', scrollToTop);

    // initial state
    onScroll();
})();
