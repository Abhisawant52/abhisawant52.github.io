document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', function () {
		var scrollDistance = window.scrollY

		// Assign active class to navigation item based on scroll position
		document
			.querySelectorAll(
				'section.container.main-info + section.container > section'
			)
			.forEach((el, i) => {
				if (
					el.offsetTop -
						document.querySelector('.main-info').offsetHeight <=
					scrollDistance
				) {
					document.querySelectorAll('.navigation a').forEach((el) => {
						if (el.classList.contains('active')) {
							el.classList.remove('active')
						}
					})
					document
						.querySelectorAll('.navigation a')
						[i].classList.add('active')
				}
			})
	})
})
