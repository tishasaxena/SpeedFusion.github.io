
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
    const reviewPopup = document.getElementById("reviewPopup");
    const openReviewBtn = document.getElementById("openReviewPopup");
    const closeReviewBtn = document.getElementById("closeReviewPopup");

    openReviewBtn.addEventListener("click", () => {
        reviewPopup.style.display = "block";
    });

    closeReviewBtn.addEventListener("click", () => {
        reviewPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === reviewPopup) {
            reviewPopup.style.display = "none";
        }
    });

    document.getElementById("reviewForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const review = document.getElementById("reviewText").value;
        const image = document.getElementById("reviewImage").files[0];

        console.log("Name:", username);
        console.log("Review:", review);
        console.log("Image file:", image);

        alert("Thanks for your review!");

        this.reset();
        reviewPopup.style.display = "none";
    });
});
