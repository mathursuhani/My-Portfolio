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
        typeSpeed: 70,
        backSpeed: 50,
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

function toggleProjects(){
    const hiddenCards = document.querySelectorAll('#projectsContainer > .hidden');
    const btn = document.getElementById("seeMoreBtn");
    if(btn.innerText === "See More Projects"){
        hiddenCards.forEach(card => card.classList.remove("hidden"));
        btn.innerText="See Less Projects"
    }else{
        const allcards = document.querySelectorAll('#projectsContainer > div');
        allcards.forEach((card, index) => {
            if(index >=3 ){
                card.classList.add('hidden');
            }
        })
        btn.innerText = "See More Projects"
    }
    
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form action

        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields.',
                confirmButtonColor: '#dc2626',
            });
            return;
        }

        // Use FormData to send the form
        const formData = new FormData(form);

        fetch("https://formsubmit.co/mathur.suhani324@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'Thank you! Your message has been sent successfully.',
                    confirmButtonColor: '#2563eb',
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            } else {
                throw new Error("Form submission failed");
            }
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Something went wrong. Please try again later.',
                confirmButtonColor: '#dc2626',
            });
            console.error(error);
        });
    });
});
