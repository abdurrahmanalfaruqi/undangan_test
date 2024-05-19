window.addEventListener('DOMContentLoaded', function () {
	const popupRekening = document.getElementById('popup-rekening');
	const tampilRekening = document.getElementById('rekening');
	const tutupRekening = document.getElementById('tutup-rekening');

	tampilRekening.addEventListener('click', (e) => {
		e.preventDefault();
		popupRekening.classList.replace('hidden', 'grid');
	});

	tutupRekening.addEventListener('click', (e) => {
		popupRekening.classList.replace('grid', 'hidden');
	});

	const jumbotronGif = document.getElementById('jumbotron-gif');
	jumbotronGif.addEventListener('ended', () => {
		console.log('Gif sudah berakhir');
	});

	jumbotronGif.play();
	jumbotronGif.pause();

	AOS.init({
		offset: 300, // offset (in px) from the original trigger point
		duration: 600, // values from 0 to 3000, with step 50ms
		once: true,
	});

	const video = document.getElementById('jumbotron-gif');
	let lastScrollTop = 0;

	const scrollStep = 0.1; // Jumlah detik yang dilompat per langkah scroll

	window.addEventListener('scroll', () => {
		const scrollPosition = window.scrollY;

		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		// Calculate the number of steps scrolled
		const totalSteps = Math.ceil(maxScroll / (window.innerHeight / 10));
		const step = Math.floor(scrollPosition / (maxScroll / totalSteps));

		// Calculate the desired currentTime based on scroll step
		const newTime = step * scrollStep;

		// Update the video's current time
		if (Math.abs(scrollPosition - lastScrollTop) > 0) {
			video.currentTime = Math.min(newTime, video.duration);
			lastScrollTop = scrollPosition;
		}
	});

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

