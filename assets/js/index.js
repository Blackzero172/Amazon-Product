let imgSelectors = document.querySelectorAll(".img-select");
imgSelectors.forEach((img) => {
	img.addEventListener("mouseover", () => {
		document.querySelector(".preview-img").src = img.getAttribute("data-src");
		imgSelectors.forEach((img) => {
			if (img.classList.contains("selected")) {
				img.classList.remove("selected");
			}
		});
		img.classList.add("selected");
	});
});
let minimized = true;
const toggleClass = () => {
	propertiesContainer.classList.toggle("minimized");
	if (minimized) {
		minimizeArrow.classList.remove("fa-chevron-down");
		minimizeArrow.classList.add("fa-chevron-up");
		minimizeText.innerText = "See less";

		minimized = false;
	} else {
		minimizeArrow.classList.remove("fa-chevron-up");
		minimizeArrow.classList.add("fa-chevron-down");
		minimizeText.innerText = "See more";
		minimized = true;
	}
};
let seeMoreBtn = document.querySelector(".see-more-btn");
let propertiesContainer = document.querySelector(".properties-container");
let minimizeArrow = document.querySelector(".minimize-arrow");
let minimizeText = document.querySelector(".minimize-text");
seeMoreBtn.addEventListener("click", toggleClass);

let addToCartBtn = document.querySelector(".add-to-cart");
let cartCounter = document.querySelector(".counter");
addToCartBtn.addEventListener("click", () => {
	if (+cartCounter.innerText < 9) cartCounter.innerText++;
});
