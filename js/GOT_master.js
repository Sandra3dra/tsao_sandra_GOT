(() => {
	console.log("fired");

	//variable stack
	//grabs the shields at the bottom of the page
	const	shields	= document.querySelectorAll(".sigil-container"),
		 	lightBox = document.querySelector(".lightbox"),
		 	video	= document.querySelector("video"),
		 	exit = document.querySelector(".lightbox-close"),
		 	banners = document.querySelector("#houseImages");

	function showLightbox() {
		//grab right video source
		// debugger;
		//get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];

		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;


		lightBox.classList.add("show-lightbox");
		video.load();
		video.play();
	}

	function closeLightbox() {
		lightBox.classList.remove("show-lightbox");
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		//this is width of one img
		const offSet = 600;
		//total distance we need to move for each shield click on
		totalOffset = this.dataset.offset * offSet + "px";
		// set the style (css animate for us)
		banners.style.right =totalOffset;
	}

	// shields.forEach(shield => shield.addEventListener("click", showLightbox));
	shields.forEach(shield => shield.addEventListener("click", animateBanner));
	
	
	video.addEventListener("ended", closeLightbox);
	exit.addEventListener("click", closeLightbox);


})();
