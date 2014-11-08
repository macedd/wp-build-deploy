/* jshint node:true */
module.exports = function( grunt ) {
	'use strict';

	require( 'load-grunt-tasks' )( grunt );

	var themeDir = '../htdocs/wp-content/themes/wordpress-bootstrap/',
	themeConfig = {

		// gets the package vars
		pkg: grunt.file.readJSON( 'package.json' ),

		// setting folder templates
		dirs: {
			css: themeDir +'/assets/css',
			js: themeDir +'/assets/js',
			sass: themeDir +'/assets/sass',
			images: themeDir +'/assets/images',
			fonts: themeDir +'/assets/fonts',
			//core: '../core',
			tmp: 'tmp'
		},

		sprite:{

			all: {
				src: '<%= dirs.images %>/sprites/*.png',
				destImg: '<%= dirs.images %>/spritesheet.png',
			    spriteName: "all",
				destCSS: '<%= dirs.sass %>/sprites/_all.scss',
		        imgPath: '../images/spritesheet.png',
			},
		},

		// javascript linting with jshint
		jshint: {
			options: {
				jshintrc: themeDir +'/.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= dirs.js %>/main.js'
			]
		},

		// uglify to concat and minify
		uglify: {
			dist: {
				files: {
					'<%= dirs.js %>/main.min.js': [
						'<%= dirs.js %>/libs/*.js', // External libs/plugins
						'<%= dirs.js %>/main.js'    // Custom JavaScript
					]
				}
			},
			bootstrap: {
				files: {
					'<%= dirs.js %>/libs/bootstrap.min.js': [
						'<%= dirs.js %>/bootstrap/transition.js',
						'<%= dirs.js %>/bootstrap/alert.js',
						'<%= dirs.js %>/bootstrap/button.js',
						'<%= dirs.js %>/bootstrap/carousel.js',
						'<%= dirs.js %>/bootstrap/collapse.js',
						'<%= dirs.js %>/bootstrap/dropdown.js',
						'<%= dirs.js %>/bootstrap/modal.js',
						'<%= dirs.js %>/bootstrap/tooltip.js',
						'<%= dirs.js %>/bootstrap/popover.js',
						'<%= dirs.js %>/bootstrap/scrollspy.js',
						'<%= dirs.js %>/bootstrap/tab.js',
						'<%= dirs.js %>/bootstrap/affix.js'
					]
				}
			}
		},

		// compile scss/sass files to CSS
		compass: {
			dist: {
				options: {
					//config: 'config.rb',
					outputStyle: 'compressed',
					cssDir:    '<%= dirs.css %>',
					sassDir:   '<%= dirs.sass %>',
					imagesDir: '<%= dirs.images %>',
					fontsDir:  '<%= dirs.fonts %>',
					javascriptsDir: '<%= dirs.js %>',
					relativeAssets: true,
					noLineComments: true,
				}
			},
			dev: {
				options: {
					environment: 'development',
					outputStyle: 'expanded',
					cssDir:    '<%= dirs.css %>',
					sassDir:   '<%= dirs.sass %>',
					imagesDir: '<%= dirs.images %>',
					fontsDir:  '<%= dirs.fonts %>',
					javascriptsDir: '<%= dirs.js %>',
					relativeAssets: true,
				}
			}
		},

		// watch for changes and trigger compass, jshint and uglify
		watch: {
			compass: {
				files: [
					'<%= dirs.sass %>/**'
				],
				tasks: ['compass:dist']
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['jshint', 'uglify']
			}
		},

		// image optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 7,
					progressive: true
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.images %>/',
					src: ['**/*.{png,jpg,gif}', '!**/sprites/**'],
					dest: '<%= dirs.images %>/'
				}]
			}
		},

		// zip the theme
		zip: {
			dist: {
				cwd: '../',
				src: [
					themeDir +'**',
					'!'+ themeDir +'/src/**',
					'!'+ themeDir +'/**.md',
					'!<%= dirs.sass %>/**',
					'!<%= dirs.js %>/bootstrap/**',
					'!<%= dirs.js %>/libs/**',
					'!<%= dirs.js %>/main.js',
					'!../**.zip'
				],
				dest: '../<%= pkg.name %>.zip'
			}
		},

		// downloads dependencies
		curl: {
			bootstrap_sass: {
				src: 'https://github.com/twbs/bootstrap-sass/archive/master.zip',
				dest: '<%= dirs.tmp %>/bootstrap-sass.zip'
			}
		},

		// unzip files
		unzip: {
			bootstrap_scss: {
				src: '<%= dirs.tmp %>/bootstrap-sass.zip',
				dest: '<%= dirs.tmp %>/'
			}
		},

		// renames and moves directories and files
		rename: {
			bootstrap_scss: {
				src: '<%= dirs.tmp %>/bootstrap-sass-master/vendor/assets/stylesheets/bootstrap',
				dest: '<%= dirs.sass %>/bootstrap'
			},
			bootstrap_js: {
				src: '<%= dirs.tmp %>/bootstrap-sass-master/vendor/assets/javascripts/bootstrap',
				dest: '<%= dirs.js %>/bootstrap'
			},
			bootstrap_fonts: {
				src: '<%= dirs.tmp %>/bootstrap-sass-master/vendor/assets/fonts/bootstrap',
				dest: '<%= dirs.fonts %>/bootstrap'
			}
		},

		// clean directories and files
		clean: {
			prepare: [
				'<%= dirs.tmp %>',
				'<%= dirs.sass %>/bootstrap/',
				'<%= dirs.js %>/bootstrap/',
				'<%= dirs.js %>/libs/bootstrap.min.js',
				'<%= dirs.fonts %>/bootstrap/'
			],
			bootstrap: [
				'<%= dirs.sass %>/bootstrap/bootstrap.scss',
				'<%= dirs.tmp %>'
			]
		},

		mkdir: {
			theme: {
				options: {
					create: [
						'<%= dirs.sass %>',
						'<%= dirs.css %>',
						'<%= dirs.js %>',
						'<%= dirs.js %>/libs/',
						'<%= dirs.images %>',
						'<%= dirs.fonts %>',
					]
				}
			},
			bootstrap: {
				options: {
					create: [
						'<%= dirs.tmp %>',
						'<%= dirs.sass %>/bootstrap/',
						'<%= dirs.js %>/bootstrap/',
						'<%= dirs.js %>/libs/',
						'<%= dirs.fonts %>/bootstrap/'
					],
				}
			},
		}

	};

	// Initialize Grunt Config
	// --------------------------
	grunt.initConfig( themeConfig );

	// Register Tasks
	// --------------------------

	// Default Task
	grunt.registerTask( 'default', [
		'jshint',
		'compass',
		'uglify'
	] );

	// Optimize Images Task
	grunt.registerTask( 'optimize', ['imagemin'] );

	// Deploy Tasks
	grunt.registerTask( 'ftp', ['ftp-deploy'] );

	// Compress
	grunt.registerTask( 'compress', [
		'default',
		'zip'
	] );

	// Bootstrap Task
	grunt.registerTask( 'bootstrap', [
		'clean:prepare',
		'mkdir:bootstrap',
		'curl:bootstrap_sass',
		'unzip:bootstrap_scss',
		'rename:bootstrap_scss',
		'rename:bootstrap_js',
		'rename:bootstrap_fonts',
		'clean:bootstrap',
		'uglify:bootstrap',
		'compass'
	] );

	// Short aliases
	grunt.registerTask( 'w', ['watch'] );
	grunt.registerTask( 'o', ['optimize'] );
	grunt.registerTask( 'f', ['ftp'] );
	grunt.registerTask( 'r', ['rsync'] );
	grunt.registerTask( 'c', ['compress'] );
};
