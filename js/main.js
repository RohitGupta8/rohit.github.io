(function ($) {
	'use strict';

	// Smooth scrolling on the navbar links
	$('.navbar-nav a').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault();

			$('html, body').animate(
				{
					scrollTop: $(this.hash).offset().top - 30,
				},
				1500,
				'easeInOutExpo'
			);

			if ($(this).parents('.navbar-nav').length) {
				$('.navbar-nav .active').removeClass('active');
				$(this).closest('a').addClass('active');
			}
		}
	});

	// Typed Initiate
	if ($('.header h2').length == 1) {
		var typed_strings = $('.header .typed-text').text();
		var typed = new Typed('.header h2', {
			strings: typed_strings.split(', '),
			typeSpeed: 100,
			backSpeed: 20,
			smartBackspace: false,
			loop: true,
		});
	}

	// About Me Typing Effect
	if ($('.about .typed-text-about').length == 1) {
		var about_strings = `
     Currently working as a Senior Software Engineer in Naviga Technology Solutions Private Limited since March 2022 .I have 3+ years of experience in building web applications. Skilled in React.js, Node.js, JavaScript, TypeScript, and MongoDB. Worked on publishing and media projects, improving performance and user experience. Helped convert old projects into modern React.js applications. Integrated .NET APIs with the frontend for smooth functionality.
    `;
		var about_typed = new Typed('.about .typed-text-about', {
			strings: [about_strings.trim()],
			typeSpeed: 80,
            loop: true,
		});
	}

	// Skills
	$('.skills').waypoint(
		function () {
			$('.progress .progress-bar').each(function () {
				$(this).css('width', $(this).attr('aria-valuenow') + '%');
			});
		},
		{ offset: '80%' }
	);

	// Porfolio isotope and filter
	var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows',
	});

	$('#portfolio-flters li').on('click', function () {
		$('#portfolio-flters li').removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});

	// Review slider
	$('.review-slider').slick({
		autoplay: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});
})(jQuery);
