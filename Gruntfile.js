module.exports = function( grunt ) {
  'use strict';

  var EMPTY = "empty:";
  //
  // Grunt configuration:
  //
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
  //
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    clean: {
      build: ["dist/"]
    },
    copy: {
      dist:{
        files: [
          {expand: true, flatten: true, src: ["app/favicon.ico", "app/favicon.png"], dest: 'dist/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contact/*'], dest: 'dist/contact/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contact/include/*'], dest: 'dist/contact/include/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contact/scripts/*'], dest: 'dist/contact/scripts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/styles/futurabt-mediumcondensed.otf'], dest: 'dist/styles/', filter: 'isFile'},
          {expand: true, flatten: true, src: ["app/scripts/fancybox/source/*.gif", "app/scripts/fancybox/source/*.png"], dest: 'dist/styles/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/scripts/vendor/require.js'], dest: 'dist/scripts/vendor/', filter: 'isFile'}
        ]
      },
      src: {
        files: [
          {expand: true, flatten: true, src: ['dist/styles/main.min.css'], dest: 'app/styles/', filter: 'isFile'}
        ]
      }
    },
    "string-replace": {
      dist: {
        files: {
          "dist/index.html": "app/index.html",
          "dist/about.html": "app/about.html",
          "dist/contact.html": "app/contact.html",
          "dist/events.html": "app/events.html",
          "dist/gallery.html": "app/gallery.html",
          "dist/merchandise.html": "app/merchandise.html"
        },
        options: {
          replacements: [{
            pattern: "styles/style.css",
            replacement: "styles/main.min.css"
          }]
        }
      }
    },
    cssmin: {
      compress: {
        files: { "dist/styles/main.min.css": [
            "app/styles/reset.css",
            "app/styles/base.css",
            "app/scripts/fancybox/source/jquery.fancybox.css",
            "app/styles/main.css",
            "app/styles/home.css",
            "app/styles/about.css",
            "app/styles/events.css",
            "app/styles/gallery.css",
            "app/styles/merchandise.css",
            "app/styles/contact.css"
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {expand: true, flatten: true, src: ["app/images/*"], dest: 'dist/images/', filter: 'isFile'},
          {expand: true, flatten: true, src: ["app/images/bag/*"], dest: 'dist/images/bag/', filter: 'isFile'},
          {expand: true, flatten: true, src: ["app/gallery/shanghai20120923/*"], dest: 'dist/gallery/shanghai20120923/', filter: 'isFile'},
          {expand: true, flatten: true, src: ["app/gallery/tokyo20130224/*"], dest: 'dist/gallery/tokyo20130224/', filter: 'isFile'}
        ]
      }
    },
    requirejs: {
      "app": {
          options: {
            baseUrl: "./app/scripts",
            include: ["main"],
            exclude: [],
            out: "dist/scripts/main.js",
            paths: {
              "jquery": 'vendor/jquery-1.8.3.min',
              "jquery-ui": 'vendor/jquery-ui-1.10.0.custom',
              "jquery.cookie": "vendor/jquery.cookie",
              "modernizr": "vendor/modernizr.min",
              "fancybox": "fancybox/source/jquery.fancybox",
              "text": "vendor/text"
            },
            map: {}
          }
      },
      "app-debug": {
          options: {
            baseUrl: "./app/scripts",
            include: ["main"],
            exclude: [],
            out: "dist/scripts/main.debug.js",
            paths: {
              "jquery": 'vendor/jquery-1.8.3.min',
              "jquery-ui": 'vendor/jquery-ui-1.10.0.custom',
              "jquery.cookie": "vendor/jquery.cookie",
              "modernizr": "vendor/modernizr.min",
              "fancybox": "fancybox/source/jquery.fancybox",
              "text": "vendor/text"
            },
            optimize: 'none',
            map: {}
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-string-replace');

  // Default task.
  grunt.registerTask('default', ['clean:build', 'copy:dist','string-replace:dist', 'cssmin','requirejs:app', 'requirejs:app-debug', 'imagemin']);

  // Alias the `test` task to run the `mocha` task instead
  //grunt.registerTask('test', 'server:phantom mocha');

};
