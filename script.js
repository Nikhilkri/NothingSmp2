// Additional JS for pro feel: fade-in on scroll, reinforce disable right-click
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${entry.target.offsetTop / 1000}s`;
            }
        });
    }, options);
    sections.forEach(section => observer.observe(section));
});

// Extra right-click disable (in case HTML attribute is bypassed)
document.addEventListener('contextmenu', event => event.preventDefault());
