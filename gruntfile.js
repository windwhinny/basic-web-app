module.exports = function(grunt) {
    // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options:require('./src/js/init')
      }
    },
    less:{
      build:{
        files:{
          'build/css/build.css':'src/less/init.less'
        }
      },
      options:{
        cleancss:true
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', 'src/**','public/**'],
          watchedExtensions: ['js'],
          watchedFolders: ['.'],
          debug: true,
          delayTime: 1,
          env: {
            APP_PORT: 3000,
            NODE_ENV: 'development'
          },
          cwd: __dirname
        }
      }
    }
  });

  //Load NPM tasks 
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');

  //task(s).
  grunt.registerTask('default', ['nodemon:dev']);
  grunt.registerTask('build',['requirejs','less'])
};
