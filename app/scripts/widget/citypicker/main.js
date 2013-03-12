define(["jquery"], function($) {

	return {
		'init': function() {

			$cityPicker = $('.city').find("li > a");
			var cities = "";
			$cityPicker.each(function() {
				var $this = $(this);
				var target = $this.attr("href");
				cities += (cities ? ',' + target : target);
			});
			var $cities = $(cities);
			$cityPicker.on("click", function(e) {
				var $this = $(this);
				var target = $this.attr("href");
				var $target = $(target);
				if ($target.length <= 0) {
					return;
				}
				// city picker change
				$cityPicker.parent("li").removeClass("active");
				$this.parent("li").addClass("active");
				// city content change
				$cities.hide();
				$target.show();
				e.preventDefault();
			});

		}
	};
});