define(["jquery", "doT", "text!./index.html"], 
	function ($, doT, template) {


	function inArray(arr, e)  
	{  
		for(i=0;i<arr.length && arr[i]!=e;i++);  
		return !(i==arr.length);  
	};
	function getCategories(data){
		var categories = [];
		for(var i = 0, lens = data.length; i < lens; i++){
			if(!inArray(categories, data[i].category)){
				categories.push(data[i].category);
			}
		}
		return categories;
	};

	return {
		"init": function(data){
			
			var categories = getCategories(data);

			var $container = $("[data-action='categories']");
			if($container.length > 0){
		        var doTemp = doT.template(template),
					$html = $(doTemp(categories));

				$container.append($html);
			}

			return categories[0];

		}
	}
});