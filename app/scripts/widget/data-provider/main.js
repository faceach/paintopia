define(["jquery"], function ($) {

	return function(){
		var dfd = $.Deferred();
        $.ajax({
            url: "http://localhost/wordpress/data.php#wp-data",
            cache: false
        }).done(function( html ) {
        	console.log('data get success');
            dfd.resolve(html);
        }).fail(function(){
        	console.log('data get failed');
        	dfd.reject()
        });
        return dfd.promise();
	}
});