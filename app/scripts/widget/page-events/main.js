define(["jquery", "doT", "../data-provider/main", "../category/main", "text!./index.html"], 
	function ($, doT, dataProvider, category, template) {



	return {
		"init": function(){
			
			var $container = $("[data-action='showeventsbycategory']");
			if($container.length <= 0){
				return;
			}

			function renderEventsByCategory(data, category){
				var events = [];

				for(var i = 0, lens = data.length; i < lens; i++){
					if(data[i].category === category && data[i].format !== "gallery"){
						events.push(data[i]);
					}
				}

		        var doTemp = doT.template(template),
					$html = $(doTemp(events));
				$container.html($html);
			};

			dataProvider().then(function(data){
				var categoryDefault = category.init(data);
				renderEventsByCategory(data, categoryDefault);

				var $container = $("[data-action='categories']");
				$container.on("click", "li > a", function(e){
					var $this = $(this);
					var _category = $this.data("category");

					$container.find("li").removeClass("active");
					$this.parent("li").addClass("active");

					renderEventsByCategory(data, _category);
					e.preventDefault();
				});
			});

		}
	}
});