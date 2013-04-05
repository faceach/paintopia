define(['jquery'
	, 'widget/language/main'
	, 'widget/showdetail/main'
	, 'widget/citypicker/main'
	, 'widget/slideshow/main'
	, 'widget/page-home/main']
	, function($, language,showDetail, cityPicker, slideshow, pageHome) {
    'use strict';

	return {
		'init': function(){
			// Language
			language.init();
			// Fancybox
			showDetail.init();
			// City Picker
			cityPicker.init();
			// Slide show
			slideshow.init();
			// Nav
			pageHome.init();
		}
	};

});