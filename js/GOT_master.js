(() => {
	console.log("fired");

	//variable stack
	//grabs the shields at the bottom of the page
	const	shields	= document.querySelectorAll(".sigil-container"),
		 	lightBox = document.querySelector(".lightbox"),
		 	video	= document.querySelector("video"),
		 	exit = document.querySelector(".lightbox-close"),
		 	banners = document.querySelector("#houseImages"),
		 	houseName = document.querySelector(".house-name"),
		 	houseInfo = document.querySelector(".house-info");

	const houseData = [ //STARK
	`House Stark of Winterfell is a Great House of
	Westeros, ruling over the vast region known as the North from their seat in
	Winterfell. It is one of the oldest lines of Westerosi nobility by far,
	claiming a line of descent stretching back over eight thousand years. Before
	the Targaryen conquest, as well as during the War of the Five Kings and
	Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled
	over the region as the Kings in the North.`
	];

	function showLightbox() {
		//grab right video source

		//get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];

		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		houseName.textContent = `House ${targetSrc}`; //backticks are JS template
		houseInfo.textContent = houseData[0]; //this only get the first data for info, we need to figure out how to get the other ones

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
		// let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		totalOffset = this.dataset.offset * offSet;// + "px";
		// set the style (css animate for us)
		// banners.style.right =totalOffset;
		TweenMax.to(banners, 0.8, {right: totalOffset});
		// TweenMax.eventCallback("onComplete", showLightbox());
		// showLightbox();
	}

	

	shields.forEach(shield => shield.addEventListener("click", showLightbox));
	// shields.forEach(shield => shield.addEventListener("click", animateBanner));
	
	
	video.addEventListener("ended", closeLightbox);
	exit.addEventListener("click", closeLightbox);


})();
