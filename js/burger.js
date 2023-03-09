document.addEventListener("DOMContentLoaded", nav);
function nav() {
	const burger = document.querySelector(".burger");
	const content = document.querySelector(".burger__content");
	const links = content.querySelectorAll(".burger__links");
	const body = document.querySelector('body');

	burger.addEventListener("click", () => {
		content.classList.toggle("show");
		if(content.classList.contains('show')){
			body.style.overflow ='hidden';
		}else{
			body.style.overflowY ='scroll';
		}
		
	});

	links.forEach((link) => {
		link.addEventListener("click", () => {
            content.classList.toggle("show");
        });
	});
}
