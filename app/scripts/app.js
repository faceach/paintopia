define(['jquery'
	, 'widget/language/main'
	, 'widget/showdetail/main'
	, 'widget/citypicker/main']
	, function($, language,showDetail, cityPicker) {
    'use strict';

	return {
		'init': function(){
			// Language
			language.init();
			// Fancybox
			showDetail.init();
			// City Picker
			cityPicker.init();
		}
	};

});