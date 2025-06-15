
document.addEventListener("DOMContentLoaded", () => {
    const contactLink = document.querySelector('.navbar a[href="#contact"]');
    const popup = document.getElementById("contactPopup");
    const closeBtn = document.getElementById("closePopup");

    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

//     document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Thank you! Your message has been sent.");
//     this.reset();
//     popup.style.display = "none";
// });


document.addEventListener("DOMContentLoaded", () => {
    const reviewLink = document.querySelector('.navbar a[href="#reviews"]');
    const popup = document.getElementById("reviewPopup");
    const closeBtn = document.getElementById("closeReviewPopup");

    reviewLink.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});


