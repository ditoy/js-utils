/**
 * Fade out DOM element
 * @param el DOM element
 */
const fadeOut = function(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.05) < 0) {
            el.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

/**
 * Fade in DOM element
 * @param el DOM element
 * @param display CSS display property, defaults tp 'block'
 */
const fadeIn = function(el, display) {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.05) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

export { fadeOut, fadeIn };
