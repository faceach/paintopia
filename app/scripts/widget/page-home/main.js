define(["jquery", "doT", "../data-provider/main", "text!./index.html"], 
	function ($, doT, dataProvider, template) {


	return {
		"init": function(){
			
			var $container = $("[data-action='upcomingevents']");
			if($container.length <= 0){
				return;
			}

			function renderUpComingEvents(data){
				var events = [];

				for(var i = 0, lens = data.length; i < lens; i++){
					if(data[i].format !== "gallery"){
						events.push(data[i]);
					}
				}

		        var doTemp = doT.template(template),
					$html = $(doTemp(events));
				$container.html($html);
			};

			dataProvider().then(function(data){
				renderUpComingEvents(data);
			});

		}
	}
});