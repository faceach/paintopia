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
          {expand: true, flatten: true, src: ['app/*.html', "app/favicon.ico", "app/favicon.png"], dest: 'dist/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contactform/*'], dest: 'dist/contactform/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contact/*'], dest: 'dist/contact/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contact/include/*'], dest: 'dist/contact/include/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/contact/scripts/*'], dest: 'dist/contact/scripts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/styles/futurabt-mediumcondensed.otf'], dest: 'dist/styles/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/scripts/vendor/require.js'], dest: 'dist/scripts/vendor/', filter: 'isFile'}
        ]
      },
      src: {
        files: [
          {expand: true, flatten: true, src: ['dist/styles/main.min.css'], dest: 'app/styles/', filter: 'isFile'}
        ]
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
        files: {
          'dist/images/': 'app/images/**/*'
        }
      }
    },
    smushit:{
      destination: {
          src: 'app/images/**/*',
          dest: 'dist/images/'
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
              "jquery-ui": 'vendor/jquery-ui-1.10.0.custom.min',
              "modernizr": "vendor/modernizr.min",
              "fancybox": "fancybox/source/jquery.fancybox"
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
              "jquery-ui": 'vendor/jquery-ui-1.10.0.custom.min',
              "modernizr": "vendor/modernizr.min",
              "fancybox": "fancybox/source/jquery.fancybox"
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

  // Default task.
  grunt.registerTask('default', ['clean:build', 'copy:dist', 'cssmin','requirejs:app', 'requirejs:app-debug', 'imagemin']);
  grunt.registerTask('css', ['cssmin', 'copy:src']);

  // Alias the `test` task to run the `mocha` task instead
  //grunt.registerTask('test', 'server:phantom mocha');

};
