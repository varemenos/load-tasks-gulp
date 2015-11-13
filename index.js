'use strict';

var path = require('path');
var pkgUp = require('pkg-up');
var multimatch = require('multimatch');

module.exports = function () {
	var config = require(path.resolve(pkgUp.sync()));

	var scope = [
		'dependencies',
		'devDependencies',
		'peerDependencies',
		'optionalDependencies'
	];

	var pattern = [
		'gulp-*',
		'@*/gulp-*',
		'!grunt'
	];

	var tasks = scope
		.map(function (type) {
			return config[type];
		})
		.reduce(function (memo, current) {
			if (current) {
				var names = Object.keys(current);

				names.map(function (name) {
					memo.push(name);
				});
			}

			return memo;
		}, []);

	multimatch(tasks, pattern).map(function (task) {
		var unprefixedTask = task.replace('gulp-', '');
		GLOBAL[unprefixedTask] = require(task);
	});
};