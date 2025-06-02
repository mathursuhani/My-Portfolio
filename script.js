const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => mobileMenu.classList.remove("scale-y-0"), 10);
        mobileMenu.classList.add("scale-y-100");
    } else {
        mobileMenu.classList.add("scale-y-0");
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if(target){
            target.scrollIntoView({ behaviour: "smooth"});
            const mobileMenu = document.getElementById("mobile-menu");
            if (!mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("scale-y-0");
                setTimeout(() => mobileMenu.classList.add("hidden"), 300);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const typedTitle = new Typed('#typed-title', {
        strings: ["Hi, I'm Suhani Mathur."],
        typeSpeed: 60,
        backSpeed:30,
        showCursor:false,
    });
    const typedSubtitle = new Typed('#typed-subtitle', {
        strings: [
            "Aspiring Web Developer",
            "Passionate Learner",
            "Creative Thinker",
            "Tech Enthusiast"
        ],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    })
})
AOS.init({
    duration: 1000, // animation duration in ms
    once: true      // animate only once when scrolled into view
});
