window.onload = function() {
    window.scrollTo(0, 0);
};

function updateCarousel(imageSrc) {
    document.querySelector('.carousel-item.active img').src = imageSrc;
}
function updateImage(imageSrc) {

    document.getElementById('cardImage').src = imageSrc;
}
function playVideo() {
    document.querySelector('.video-section').innerHTML = '<iframe width="100%" height="500px" src="https://www.youtube.com/embed/pU6swfkMRiI?autoplay=1" allowfullscreen></iframe>';
}

const reviews = [
    { name: "Alice Johnson", position: "CEO, TechCorp", text: "Great service and support!", img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Michael Smith", position: "Manager, SoftSolutions", text: "Absolutely loved the experience!", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Emma Brown", position: "Designer, Creatify", text: "Highly recommend this product!", img: "https://randomuser.me/api/portraits/women/3.jpg" }
];

let currentReview = 0;

function renderReviews() {
    const container = document.getElementById("reviews-container");
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const review = reviews[(currentReview + i) % reviews.length];
        container.innerHTML += `
            <div class="review-card">
                <div class="stars">★★★★★</div>
                <p>"${review.text}"</p>
                <div class="profile">
                    <img src="${review.img}" alt="Profile Picture">
                    <p><strong>${review.name}</strong><br>${review.position}</p>
                </div>
            </div>
        `;
    }
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    renderReviews();
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    renderReviews();
}

renderReviews();

function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";
    document.querySelectorAll('.faq-content').forEach(el => el.style.display = "none");
    document.querySelectorAll('.faq-item button span').forEach(el => el.textContent = "+");
    if (!isOpen) {
        content.style.display = "block";
        button.querySelector("span").textContent = "−";
    }
}

window.onscroll = function() {
    let btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

