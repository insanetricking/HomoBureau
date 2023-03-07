document.addEventListener("DOMContentLoaded", nav);
function nav() {
	const burger = document.querySelector(".burger");
	const content = document.querySelector(".burger__content");
	const links = content.querySelectorAll(".burger__links");

	burger.addEventListener("click", () => {
		content.classList.toggle("show");
	});

	links.forEach((link) => {
		link.addEventListener("click", () => {
            content.classList.toggle("show");
        });
	});
}
