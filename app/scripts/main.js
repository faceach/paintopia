(function(){
    'use strict';
    
    require.config({
        paths: {
            "jquery": 'vendor/jquery-1.8.3.min',
            "jquery-ui": 'vendor/jquery-ui-1.10.0.custom.min',
            "modernizr": "vendor/modernizr.min",
            "fancybox": "fancybox/source/jquery.fancybox"
        },
        shim: {
            'fancybox': {
                deps: ['jquery']
            },
            'jquery-ui': {
                deps: ['jquery']
            }
        }
    });

    require(['require', 'jquery', 'app', 'modernizr'], function(parentRequire, $, app) {
        $(document).ready(function() {
            app.init();
        });
    });

})();