define(["jquery"
	, "jquery.cookie"
	, "../blurb/main"
	, "text!./index.html"],function($, cookie, blurbs, template){

		var LANGUAGE_DEFAULT = 'en';

		return {
			'init': function(){
				
				var lng_cookie = $.cookie('lng');
				var lng = lng_cookie || LANGUAGE_DEFAULT;

				if(lng){
					// Set language class for styles
					$('body').addClass(lng);
					// Set language text
					$("[data-blurb]").each(function(i, e){
						var $this = $(this);
						var blurb = $this.data('blurb');
						if(blurb){
							$this.html(blurbs(blurb, lng));
						}
					})
				}
				
				var $template = $(template);
				$("#hook-language").append($template);
				$template.on("click", "[data-lng]", function(){
					var $this = $(this);
					var toLng = $this.data('lng');
					$.cookie('lng', toLng);
					location.reload(true);
				});


			}
		};
});