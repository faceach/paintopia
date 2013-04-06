define(["jquery", "doT", "../data-provider/main", "../category/main", "text!./index.html"], 
	function ($, doT, dataProvider, category, template) {



	return {
		"init": function(){
			
			var $container = $("[data-action='showgallerybycategory']");
			if($container.length <= 0){
				return;
			}

			function renderGallerysByCategory(data, category){
				var gallery = [];
				var index = 0;

				for(var i = 0, lens = data.length; i < lens; i++){
					if(data[i].category === category && data[i].format === "gallery"){
						gallery.push(data[i]);
					}
				}
		        var doTemp = doT.template(template),
					$html = $(doTemp(gallery[index]));


				$container.on("click", "a.gallery-side-prev", function(e){
					e.preventDefault();
					if(index <= 0){
						return;
					}
					index--;
					$html = $(doTemp(gallery[index]));
					$container.html($html);
					if(index <= 0){
						$container.find("a.gallery-side-prev").css("visibility", "hidden");
					}
					if(index < gallery.length - 1){
						$container.find("a.gallery-side-next").css("visibility", "visible");
					}
				}).on("click", "a.gallery-side-next", function(e){
					e.preventDefault();
					if(index >= gallery.length){
						return;
					}
					index++;
					$html = $(doTemp(gallery[index]));
					$container.html($html);
					if(index >= gallery.length -1){
						$container.find("a.gallery-side-next").css("visibility", "hidden");
					}
					if(index > 0){
						$container.find("a.gallery-side-prev").css("visibility", "visible");
					}
				});

				$container.html($html);

				$html.find("a.gallery-side-prev").css("visibility", "hidden");
				if(gallery.length < 2){
					$html.find("a.gallery-side-next").css("visibility", "hidden");
				}
			};

			dataProvider().then(function(data){
				var categoryDefault = category.init(data);
				renderGallerysByCategory(data, categoryDefault);

				var $container = $("[data-action='categories']");
				$container.on("click", "li > a", function(e){
					e.preventDefault();
					var $this = $(this);
					var _category = $this.data("category");

					$container.find("li").removeClass("active");
					$this.parent("li").addClass("active");

					renderGallerysByCategory(data, _category);
				});
			});

		}
	}
});