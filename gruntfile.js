// =============================================================================
// Grunt Configuration
// (c) Mathigon
// =============================================================================



const grunt = require('grunt');
const pug = require('pug');
const marked = require('marked');
const rollup = require('rollup');
const rollupResolve = require('rollup-plugin-node-resolve');

require('load-grunt-tasks')(grunt);
require('@mathigon/parser')(grunt);

const BUILD = '_build';
const MEDIA = '**/*.{gif,png,jpg,webp,ico,json,mp3,mp4,m4a,webm,svg,pdf,txt,zip,xml,woff,woff2}';


// -----------------------------------------------------------------------------
// JavaScript Rollup

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
// Lesson Plans

grunt.registerMultiTask('tropicsuLessons', '', function() {
  const overview = grunt.file.readYAML('lessons/lessons.yaml');

  for (const f of this.files) {
    const course = grunt.file.readYAML(f.src[0] + '/en/data.json');
    course.id = f.src[0].match(/\/([^\/]*)$/g)[0].slice(1);

    Object.assign(course, overview[course.id]);
    course.glossary = grunt.file.read(f.src[0] + '/en/glossary.json');
    course.bios = grunt.file.read(f.src[0] + '/en/bios.json');
    course.hints = grunt.file.read(f.src[0] + '/en/hints.json');

    for (let s of course.sections) {
      const step = course.steps.find(step => step.section === s.id);
      s.format = step.format;
      s.duration = step.duration;
    }

    for (let section of course.sections) {
      const sectionHTML = grunt.file.read(f.src[0] + `/en/sections/${section.id}.html`);
      const html = pug.renderFile('static/lesson.pug', {course, section, sectionHTML});
      grunt.file.write(f.dest + '/' + section.id + '.html', html);
    }
  }
});


// -----------------------------------------------------------------------------
// Tools

grunt.registerMultiTask('tropicsuTools', '', function() {
  for (const f of this.files) {
    const tool = grunt.file.readYAML(f.src[0]);
    tool.id = f.src[0].match(/\/([^\/]*).yaml/g)[0].slice(1).replace('.yaml', '');
    if (tool.learningOutcomes) tool.learningOutcomes = marked(tool.learningOutcomes);
    const html = pug.renderFile('static/tool.pug', {tool});
    grunt.file.write(f.dest, html);
  }
});


// -----------------------------------------------------------------------------
// Grunt Configuration

grunt.initConfig({

  clean: [BUILD],

  less: {
    options: {
      optimisation: 1,
      banner: '/* (c) Mathigon */\n',
      compress: true
    },
    app: {
      files: [{
        expand: true,
        cwd: 'assets',
        dest: BUILD,
        src: ['**/*.less'],
        ext: '.css'
      }]
    },
    courses: {
      files: [{
        expand: true,
        cwd: 'lessons',
        dest: BUILD + '/resources',
        src: ['*/*.less'],
        ext: '.css'
      }]
    }
  },

  autoprefixer: {
    app: {
      files: [{
        expand: true,
        src: 'assets/**/*.css'
      }]
    }
  },

  rollup: {
    app: {
      files: [{
        expand: true,
        cwd: 'lessons',
        src: '*/functions.js',
        dest: BUILD + '/resources'
      }]
    }
  },

  textbooks: {
    app: {
      files: [{
        expand: true,
        cwd: 'lessons',
        src: ['*', '!shared'],
        dest: BUILD + '/resources'
      }]
    }
  },

  tropicsuLessons: {
    app: {
      files: [{
        expand: true,
        cwd: BUILD + '/resources',
        src: ['*'],
        dest: BUILD + '/lesson'
      }]
    }
  },

  tropicsuTools: {
    app: {
      files: [{
        expand: true,
        cwd: 'tools',
        src: ['*.yaml'],
        dest: BUILD + '/tool',
        ext: '.html'
      }]
    }
  },

  pug: {
    options: {
      data: function() {
        // TODO Improve the generation of courses and tools arrays.

        const courses = [];
        const courseData = grunt.file.readYAML('lessons/lessons.yaml');
        for (let id of Object.keys(courseData)) {
          courseData[id].id = id;
          courses.push(courseData[id]);
        }

        const tools = [];
        const toolNames = grunt.file.expand('tools/*.yaml');
        for (let file of toolNames) {
          const tool = grunt.file.read(file);
          tool.id = file.slice(6).replace('.yaml', '');
          tools.push(tool);
        }

        return {courses, tools};
      }
    },
    app: {
      files: [{
        expand: true,
        cwd: 'static',
        dest: BUILD,
        src: ['**/*.pug', '!_template.pug', '!lesson.pug', '!tool.pug'],
        ext: '.html'
      }]
    }
  },

  copy: {
    app: {
      files: [
        {expand: true, cwd: 'assets', dest: BUILD, src: [MEDIA, '**/*.{css,js,html}']},
        {expand: true, cwd: 'lessons', dest: BUILD + '/resources', src: MEDIA},
        {expand: true, cwd: 'tools/images', dest: BUILD + '/tools/images', src: MEDIA},
        {expand: true, cwd: 'node_modules/emojione-assets/png/64', dest: BUILD + '/images/emoji', src: MEDIA},
      ],
    }
  },

  watch: {
    css: {
      files: ['assets/*/*.less', 'lessons/*/*.less'],
      tasks: ['less', 'autoprefixer']
    },
    js: {
      files: ['lessons/*/*.js'],
      tasks: ['rollup']
    },
    lessons: {
      files: ['content/*/*.md', 'content/*/*.yaml'],
      tasks: ['textbooks', 'tropicsuLessons']
    },
    tools: {
      files: ['tools/*.yaml'],
      tasks: ['tropicsuTools']
    },
    html: {
      files: ['static/*.pug'],
      tasks: ['pug']
    }
  },

  concurrent: {
    options: {limit: 5, logConcurrentOutput: true},
    app: { tasks: ['watch:css', 'watch:js', 'watch:lessons', 'watch:tools', 'watch:html'] }
  }
});

grunt.registerTask('default', ['clean', 'less', 'autoprefixer', 'rollup',
  'textbooks', 'tropicsuLessons', 'tropicsuTools', 'pug', 'copy']);
