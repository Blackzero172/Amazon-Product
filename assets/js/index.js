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
