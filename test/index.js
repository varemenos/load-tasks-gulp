var test = require('ava');
var isFunction = require('lodash.isfunction');

var loadTasksGulp = require('../index');
var config = require('./dummy.json');

loadTasksGulp(config);

test('load sample tasks', function (t) {
	t.true(isFunction(sass), 'try to load "gulp-sass" task into "sass" variable');
	t.true(isFunction(addSrc), 'try load "gulp-add-src" task into "addSrc" variable (from dashcase to camelcase)');
	t.end();
});

test('expect loaded tasks to be the same as the manually loaded ones', function (t) {
	var gulpSass = require('gulp-sass');
	var gulpAddSrc = require('gulp-add-src');

	t.same(sass, gulpSass);
	t.same(addSrc, gulpAddSrc);
	t.end();
});

test('expect tasks to not have the same content', function (t) {
	t.notSame(sass, addSrc);
	t.end();
});
