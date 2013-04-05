define(["jquery", "dot", "../data-provider/main", "../page-events/main", "../page-gallery/main", "text!./index.html"], 
	function ($, dot, dataProvider, pageEvents, pageGallery, template) {


	return {
		"init": function(){
			
			var $container = $("[data-action='upcomingevents']");
			if($container.length <= 0){
				return;
			}

			dataProvider().then(function(data){
				console.log(data);
			});

		}
	}
});