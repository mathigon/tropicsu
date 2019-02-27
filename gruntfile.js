// =============================================================================
// Grunt Configuration
// (c) Mathigon
// =============================================================================



const grunt = require('grunt');
const rollup = require('rollup');
const rollupResolve = require('rollup-plugin-node-resolve');


// -----------------------------------------------------------------------------
// Plugins and Setup

grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
require('@mathigon/parser')(grunt);

grunt.registerMultiTask('rollup', '', function() {
  const done = this.async();

  function onwarn(error) {
    if (error.code !== 'CIRCULAR_DEPENDENCY') grunt.log.error(error.message);
  }

  const promises = this.files.map(f => {
    return rollup.rollup({input: f.src[0], plugins: [rollupResolve()], onwarn})
      .then(bundle => bundle.generate({format: 'iife', name: '_stepFunctions'}))
      .then(result => grunt.file.write(f.dest, result.code));
  });

  Promise.all(promises)
    .then(() => done())
    .catch(error => grunt.fail.warn(error));
});


// -----------------------------------------------------------------------------
// Grunt Configuration

grunt.initConfig({

  less: {
    options: {
      optimisation: 1,
      banner: '/* (c) Mathigon */\n',
      compress: true
    },
    app: {
      files: {'server/assets/tropicsu.css': 'server/assets/*.less'}
    }
  },

  autoprefixer: {
    app: {
      files: [{src: 'server/assets/tropicsu.css'}]
    }
  },

  textbooks: {
    app: {
      files: [{
        expand: true,
        cwd: 'content',
        src: ['*', '!shared'],
        dest: 'server/assets/resources'
      }]
    }
  },

  rollup: {
    app: {
      files: [{
        expand: true,
        cwd: 'content',
        src: '*/functions.js',
        dest: 'server/assets/resources'
      }]
    }
  },

  watch: {
    js: {
      files: ['content/**/*.js'],
      tasks: ['rollup']
    },
    textbooks: {
      files: ['content/*/*.md'],
      tasks: ['textbooks']
    }
  },

  concurrent: {
    options: {limit: 2, logConcurrentOutput: true},
    app: { tasks: ['watch:js', 'watch:textbooks'] }
  }
});

grunt.registerTask('default', ['less', 'autoprefixer', 'textbooks', 'rollup']);
