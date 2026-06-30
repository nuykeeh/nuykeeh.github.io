document.addEventListener('DOMContentLoaded', () => {
    initMarquee();
    initCarousel();
    initScrollReveal();
});

/**
 * Animated Text Block - Vertical Cycling
 */
function initMarquee() {
    const textArr = [
        "UX/UI DESIGNER",
        "NEW MEDIA ARTIST",
        "WEB PUBLISHER",
        "GAME DESIGNER",
        "NUYKEEH PORTFOLIO"
    ];
    
    const wrapper = document.querySelector('.marquee-wrapper');
    if (!wrapper) return;

    let currentIndex = 0;
    
    function createTextElement(text) {
        const div = document.createElement('div');
        div.className = 'marquee-text';
        div.textContent = text;
        div.style.transform = 'translateY(100%)';
        div.style.opacity = '0';
        div.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s';
        return div;
    }

    let currentEl = createTextElement(textArr[currentIndex]);
    wrapper.appendChild(currentEl);
    
    // Initial reveal
    setTimeout(() => {
        currentEl.style.transform = 'translateY(0)';
        currentEl.style.opacity = '1';
    }, 100);

    setInterval(() => {
        // Outgoing
        currentEl.style.transform = 'translateY(-100%)';
        currentEl.style.opacity = '0';
        
        const prevEl = currentEl;
        
        // Incoming
        currentIndex = (currentIndex + 1) % textArr.length;
        currentEl = createTextElement(textArr[currentIndex]);
        wrapper.appendChild(currentEl);
        
        setTimeout(() => {
            currentEl.style.transform = 'translateY(0)';
            currentEl.style.opacity = '1';
        }, 50);

        // Cleanup
        setTimeout(() => {
            prevEl.remove();
        }, 800);
    }, 3000);
}

/**
 * Hero Carousel Logic
 */
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    if (!track || slides.length === 0) return;

    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }, 5000);
}

/**
 * Reveal elements on scroll
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(card);
    });
}
