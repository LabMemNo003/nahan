'use strict';

const fse = require('fs-extra');

const pkgs = [
    'nahan-onion',
    'nahan-context',
    'nahan-context-koa',
    'nahan-path',
    'nahan-method',
];

let res = ''
res += '# nahan\n'
res += '\n'
res += '| package | version | build | coverage |\n'
res += '|:-------:|:-------:|:-----:|:--------:|\n'
for (const pkg of pkgs) {
    res += `| [**${pkg}**](https://github.com/nahanjs/${pkg}) `
    res += `| [![NPM Version][${pkg}-npm-image]][${pkg}-npm-url] `
    res += `| [![Build Status][${pkg}-travis-ci-image]][${pkg}-travis-ci-url] `
    res += `| [![Coverage Status][${pkg}-coveralls-image]][${pkg}-coveralls-url] `
    res += `|\n`
}
for (const pkg of pkgs) {
    res += '\n'
    res += `[${pkg}-npm-image]: https://img.shields.io/npm/v/${pkg}.svg\n`
    res += `[${pkg}-npm-url]: https://www.npmjs.com/package/${pkg}\n`
    res += `[${pkg}-travis-ci-image]: https://travis-ci.org/nahanjs/${pkg}.svg?branch=master\n`
    res += `[${pkg}-travis-ci-url]: https://travis-ci.org/nahanjs/${pkg}\n`
    res += `[${pkg}-coveralls-image]: https://coveralls.io/repos/github/nahanjs/${pkg}/badge.svg?branch=master\n`
    res += `[${pkg}-coveralls-url]: https://coveralls.io/github/nahanjs/${pkg}?branch=master\n`
}

fse.writeFileSync('README.md', res);
