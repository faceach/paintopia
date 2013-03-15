define(["jquery"
	, "jquery.cookie"
	, "../blurb/main"
	, "text!./index.html"],function($, cookie, blurbs, template){

		var LANGUAGE_DEFAULT = 'en';
		var LANGUAGE_CLASSES = 'en cn jp';

		return {
			'init': function(){
				
				function update(lng){
					if(!lng){
						lng = LANGUAGE_DEFAULT;
					}
					// Set language class for styles
					$('body').removeClass(LANGUAGE_CLASSES).addClass(lng);
					// Set language text
					$("[data-blurb]").each(function(i, e){
						var $this = $(this);
						var blurb = $this.data('blurb');
						if(blurb){
							$this.html(blurbs(blurb, lng));
						}
					})
				};
				
				var $template = $(template);
				$template.on("click", "[data-lng]", function(){
					var $this = $(this);
					var toLng = $this.data('lng');
					$.cookie('lng', toLng);
					update(toLng);
				});
				$("#hook-language").append($template);

				update($.cookie('lng'));
			}
		};
});