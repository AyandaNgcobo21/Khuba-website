/* ==========================================
   KHUBA PROPERTY MAINTENANCE
   Premium Website JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       STICKY NAVIGATION
    ============================ */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ============================
       MOBILE MENU
    ============================ */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }


    /* ============================
       SMOOTH SCROLL
    ============================ */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

            navLinks.classList.remove("show");

        });

    });


    /* ============================
       ANIMATED COUNTERS
    ============================ */

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target / 100;

                const update = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText = target;

                    }

                };

                update();

                counterObserver.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    /* ============================
       SCROLL REVEAL
    ============================ */

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(item => {

        revealObserver.observe(item);

    });


    /* ============================
       ACTIVE NAVIGATION
    ============================ */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /* ============================
       BACK TO TOP BUTTON
    ============================ */

    const topBtn = document.querySelector(".backToTop");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const service=document.getElementById("service").value;
const date=document.getElementById("date").value;
const message=document.getElementById("message").value;

const whatsappNumber="27782171534"; // Replace if different

const whatsappMessage=`Hello KHUBA,

I would like to book a service.

Name: ${name}

Phone: ${phone}

Service: ${service}

Preferred Date: ${date}

Job Details:
${message}`;

alert("Booking submitted successfully! You will now be redirected to WhatsApp.");

setTimeout(function(){

window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,"_blank");

},1000);

});



});