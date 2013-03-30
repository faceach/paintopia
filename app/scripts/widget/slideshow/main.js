define(["jquery"], function ($) {

	var ACTIVE_CSSCLASS = "active";
	var INDEX = 0;

	return {
		"init": function(){
			var $slideshow = $("[data-action='slideshow']");
			if($slideshow.length <= 0){
				return;
			}
			var $slides = $slideshow.find("> p");
			var INDEX_MAX = $slides.length;

			(function fnInterval(){
				$slides.removeClass(ACTIVE_CSSCLASS);
				$slides.eq(INDEX).addClass(ACTIVE_CSSCLASS);
				INDEX++;
				if(INDEX >= INDEX_MAX){
					INDEX = 0;
				}
				setTimeout(fnInterval, 5000);
			})();			
		}
	}
});