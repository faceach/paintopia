define(["jquery"], function ($) {
    "use strict";

    function getCategory(cssClasses){
        var arrClass = cssClasses.split(" ");
        for(var i = 0, lens = arrClass.length; i < lens; i++){
            if(arrClass[i].indexOf("category-") === 0){
                return arrClass[i].substring(9);
            }
        }
        return "";
    };
    function getMeta($lists, metaKey){
        if($lists.length <= 0){
            return;
        }
        var meta = "";
        $lists.each(function(i, e){
            var $this = $(this);
            var $metaKey = $this.find("span.post-meta-key");
            var keyName = $metaKey.text().toLowerCase();
            if(keyName.indexOf(metaKey) >= 0){
                meta = $this.text().substr($metaKey.text().length).trim();
                return;
            }
        });
        return meta;
    };
    function getImages($lists){
        if($lists.lenght <= 0){
            return;
        }
        var imageList = [];
        $lists.each(function(i, e){
            var $this = $(this);
            imageList.push($this.attr("href"));
        });
        return imageList;
    };
    function dataHandler(html){
        var data = [];

        var $data = $(html);

        $data.find("> div").each(function(i, e){
            var $this = $(this);
            var o = {};
            // pick up data from DOM            
            var title = $this.find(".entry-title > a").text();
            var category = getCategory($this.attr("class"));

            // create data
            o.title = title;
            o.category = category;
            o.time = getMeta($this.find(".entry-content > ul.post-meta > li"), "time");
            o.location = getMeta($this.find(".entry-content > ul.post-meta > li"), "location");
            // Gallery
            if($this.hasClass("format-gallery")){
                o.format = "gallery";
                o.images = getImages($this.find(".entry-content > p > a"));
            }
            else{
                o.format = "standard";
                o.content = $this.find(".entry-content > p").text();
            }
            data.push(o);
        });

        return data;
    };

	return function(){
		var dfd = $.Deferred();
        $.ajax({
            url: "../../data.php#wp-data",
            cache: false
        }).done(function( html ) {
            var data = dataHandler(html);
            dfd.resolve(data);
        }).fail(function(){
        	dfd.reject()
        });
        return dfd.promise();
	}
});