// ✅ Search Filter Functionality
const searchInput = document.getElementById("searchBox");
const productItems = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});

// ✅ Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTopBtn";
document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Wishlist Heart Animation
const hearts = document.querySelectorAll(".wishlist-icon");
hearts.forEach(heart => {
    heart.addEventListener("click", function () {
        heart.classList.toggle("active-heart");
    });
});
