# load-tasks-gulp

> load gulp tasks automatically, no need to require every single one of them

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

As you notice there was no need to require() `gulp-sass` because it was automatically detected and loaded since it was declared in the package.json file

## License

MIT
