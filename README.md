# load-tasks-gulp

> hassle-free task loading, you no need to require every single one of them yourself!

[![Build Status](https://travis-ci.org/varemenos/load-tasks-gulp.svg)](https://travis-ci.org/varemenos/load-tasks-gulp)

With `load-tasks-gulp` you can load all the gulp tasks that are defined in your package.json file.

## Install

```
$ npm install --save-dev load-tasks-gulp
```

## Usage

```js
// Gulpfile.js
require('load-tasks-gulp')();
```

## Examples

```js
// package.json
"devDependencies": {
  "gulp-sass": "^2.1.0"
}
```

```js
// Gulpfile.js
gulp.src('./sass/**/*.scss')
    .pipe(sass()
    .pipe(gulp.dest('./css'));
]);
```

As you see, there was no need to require() the `gulp-sass` package. That's because it was automatically detected and loaded by load-tasks-gulp since was declared in the package.json file.

## License

MIT
