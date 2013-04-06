define(['jquery'
	, 'widget/language/main'
	, 'widget/showdetail/main'
	, 'widget/slideshow/main'
	, 'widget/page-home/main'
	, 'widget/page-events/main'
	, 'widget/page-gallery/main'
	]
	, function($, language,showDetail, slideshow, pageHome, pageEvents, pageGallery) {
    'use strict';

	return {
		'init': function(){
			// Language
			language.init();
			// Fancybox
			showDetail.init();
			// Slide show
			slideshow.init();
			// Nav
			pageHome.init();
			// Events
			pageEvents.init();
			// Gallery
			pageGallery.init();
		}
	};

});