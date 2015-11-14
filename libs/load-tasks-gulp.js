var path = require('path');
var pkgUp = require('pkg-up');
var multimatch = require('multimatch');
var camelcase = require('camelcase');

module.exports = function (data) {
	var config = data || require(path.resolve(pkgUp.sync()));

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
		var taskName = camelcase(task.replace('gulp-', ''));

		if (taskName) {
			GLOBAL[taskName] = require(task);
		}
	});
};
