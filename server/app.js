// =============================================================================
// Mathigon Textbook Server Configuration
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const path = require('path');
const express = require('express');
const yaml = require('js-yaml');


// -----------------------------------------------------------------------------
// Course Class

const COURSE_PATH = path.join(__dirname, 'assets/resources/');
const COURSE_YAML = yaml.safeLoad(
    fs.readFileSync(path.join(__dirname, '../lesson-plans.yaml')));

class Course {

  constructor(id) {
    const data = require(path.join(COURSE_PATH, id, 'data.json'));
    this.id = id;
    this.sections = data.sections;
    this.title = data.title;
    this.color = COURSE_YAML[id].color;
    this.description = COURSE_YAML[id].description;
  }

  readFile(name) {
    try {
      return fs.readFileSync(path.join(COURSE_PATH, this.id, name));
    } catch (e) {
      return null;
    }
  }

  getNextLink(sectionId) {
    const sectionIndex = this.sections.findIndex(s => s.id === sectionId);
    return this.sections[sectionIndex + 1];
  }

  getJSON(type) { return this.readFile(type + '.json'); }
  getSection(section) { return this.sections.find(s => s.id === section); }
  getSectionHTML(section) { return this.readFile(`sections/${section}.html`); }
}

const courses = {};
const courseIds = fs.readdirSync(COURSE_PATH).filter(f => f in COURSE_YAML);
for (let c of courseIds) courses[c] = new Course(c);


// -----------------------------------------------------------------------------
// Web Server

const app = express();
app.set('port', 5000);
app.set('env', 'development');
app.set('views', path.join(__dirname, 'assets'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/resources', express.static(path.join(__dirname, '../content')));
app.use('/images/emoji', express.static(path.join(
    __dirname, '../node_modules/emojione-assets/png/64')));

app.get('/', (req, res) => res.render('index', {courses: COURSE_YAML}));
app.get('/_ah/health', (req, res) => res.status(200).send('ok'));

app.get('/course/:course', function(req, res, next) {
  const course = courses[req.params.course];
  if (!course) return next();
  res.redirect(`/course/${course.id}/${course.sections[0].id}`);
});

app.get('/course/:course/:section', function(req, res, next) {
  const course = courses[req.params.course];
  if (!course) return next();

  const section = course.getSection(req.params.section);
  if (!section) return next();

  res.render('course', {course, section});
});

app.post('/course/:course/ask', function(req, res) {
  res.type('txt').send(JSON.stringify([{content: '[NOT IMPLEMENTED]'}]));
});

app.listen(5000, function() {
  console.log('Server listening on port 5000');
});
