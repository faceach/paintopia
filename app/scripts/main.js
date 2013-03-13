(function(){
    'use strict';
    
    require.config({
        paths: {
            "jquery": 'vendor/jquery-1.8.3.min',
            "jquery-ui": 'vendor/jquery-ui-1.10.0.custom',
            "jquery.cookie": "vendor/jquery.cookie",
            "modernizr": "vendor/modernizr.min",
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