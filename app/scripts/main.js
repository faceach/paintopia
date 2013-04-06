(function(){
    'use strict';

    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g,'');
        }
    }
    
    require.config({
        paths: {
            "jquery": 'vendor/jquery-1.8.3.min',
            "jquery-ui": 'vendor/jquery-ui-1.10.0.custom',
            "jquery.cookie": "vendor/jquery.cookie",
            "modernizr": "vendor/modernizr.min",
            "flickr": "vendor/jquery.flickr-1.0",
            "doT": "vendor/dot/1.0.0/main",
            "fancybox": "fancybox/source/jquery.fancybox",
            "text": "vendor/text"
        },
        shim: {
            'fancybox': {
                deps: ['jquery']
            },
            "jquery.cookie": {
                deps: ['jquery']
            },
            'jquery-ui': {
                deps: ['jquery']
            }
        },
        waitSeconds: 0
    });

    require(['require', 'jquery', 'app', 'modernizr'], function(parentRequire, $, app) {
        $(document).ready(function() {
            //
            app.init();
        });
    });

})();