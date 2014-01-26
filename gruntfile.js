module.exports = function(grunt) {
    // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options:require('./src/js/init')
      }
    },
		jsbeautifier:{
			files:['src/**/*.js'],
			options:{
				js: {
					braceStyle: "collapse",
					breakChainedMethods: false,
					e4x: false,
					evalCode: false,
					indentChar: " ",
					indentLevel: 0,
					indentSize: 2,
					indentWithTabs: false,
					jslintHappy: false,
					keepArrayIndentation: false,
					keepFunctionIndentation: false,
					maxPreserveNewlines: 10,
					preserveNewlines: true,
					spaceBeforeConditional: true,
					spaceInParen: false,
					unescapeStrings: false,
					wrapLineLength: 0
				}
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
		bower:{
			install:{

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
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-jsbeautifier');
  //task(s).
  grunt.registerTask('default', ['nodemon:dev']);
  grunt.registerTask('build',['requirejs','less'])
  grunt.registerTask('install',['bower:install'])
  grunt.registerTask('beautify',['jsbeautifier'])
	
};
