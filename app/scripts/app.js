define(['jquery'
	, 'widget/language/main'
	, 'widget/showdetail/main'
	, 'widget/citypicker/main'
	, 'widget/slideshow/main'
	, 'flickr']
	, function($, language,showDetail, cityPicker, slideshow) {
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
			// Flickr get Photo
			/*
			$("body").flickr({
				api_key: '9e47810f1a48239068172be44b8a4431',              // [string]    required, see http://www.flickr.com/services/api/misc.api_keys.html
				type: 'photoset',                 // [string]    allowed values: 'photoset', 'search', default: 'flickr.photos.getRecent'
				photoset_id: '72157633096730668',          // [string]    required, for type=='photoset'  
				text: null,			            // [string]    for type=='search' free text search
				user_id: null,              // [string]    for type=='search' search by user id
				group_id: null,             // [string]    for type=='search' search by group id
				tags: null,                 // [string]    for type=='search' comma separated list
				tag_mode: 'any',            // [string]    for type=='search' allowed values: 'any' (OR), 'all' (AND)
				sort: 'date-posted-asc',    // [string]    for type=='search' allowed values: 'date-posted-asc', 'date-posted-desc', 'date-taken-asc', 'date-taken-desc', 'interestingness-desc', 'interestingness-asc', 'relevance'
				thumb_size: 's',            // [string]    allowed values: 's' (75x75), 't' (100x?), 'm' (240x?)
				size: null,                 // [string]    allowed values: 'm' (240x?), 'b' (1024x?), 'o' (original), default: (500x?)
				per_page: 16,              // [integer]   allowed values: max of 500
				page: 1,     	              // [integer]   see paging notes
				attr: '',                   // [string]    optional, attributes applied to thumbnail <a> tag
				api_url: null,              // [string]    optional, custom url that returns flickr JSON or JSON-P 'photos' or 'photoset'
				params: '',                 // [string]    optional, custom arguments, see http://www.flickr.com/services/api/flickr.photos.search.html
				api_callback: '?',          // [string]    optional, custom callback in flickr JSON-P response
				callback: null              // [function]  optional, callback function applied to entire <ul>
			});
			*/
		}
	};

});