# TROP ICSU Lesson Plans

__TROP ICSU__ (_“Trans-disciplinary Research Oriented Pedagogy for Improving
Climate Studies and Understanding”_) is a global project funded by the
[International Science Council](https://council.science/). We collate and curate
digital teaching resources that integrate climate studies with curriculum in
various disciplines, including Science, Mathematics, and Social Science. These
teaching resources are locally rooted in their context, but globally relevant
for their science.

The goal is not to introduce Climate Education as a stand-alone topic, but to
integrate it with the core curriculum of Science, Mathematics, and Social
Sciences.


## Getting Started

After forking and cloning this repository, install all dependencies using
`npm install`.

Now you can start a local development server by running `npm start`. Wait for
the assets to be compiled and then open [localhost:5000](http://localhost:5000).
The server will automatically watch for file changes.

Every lesson plan is a subfolder in the [content](content) directory. The URL of
the [CO2 and Calculus course](content/co2-calculus), for example, will be
[localhost:5000/course/co2-calculus](http://localhost:5000/course/co2-calculus).


## Course Structure

Every lesson plan consists of a few different components:

* `content.md` contains the source code and metadata for the lesson plan. It is
  written in a [custom extension](https://mathigon.io/markdown) of
  [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* `functions.js` contains all lesson plan specific JavaScript code.
* `styles.less` contains all lesson plan specific styles, in
  [LESS](http://lesscss.org/) format.

The [shared directory](content/shared) contains biographies, glossary and assets
used by multiple lesson plan.

Every lesson plan is divided into multiple steps, each with a unique ID. These
IDs are used as function names in `functions.js` when exporting the setup code
for every section.

The [server directory](server) contains a simplified version of Mathigon's web
server.


## Contributing

TODO


## License

TODO
