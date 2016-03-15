'use strict';
var fs = require('fs-extra');
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('ES2017 boilerplate generator', () => {
  context('minimal', () => {
    before((done) => {
      helpers.run(path.join(__dirname, '../generators/minimal'))
        .inTmpDir(function (dir) {
          // `dir` is the path to the new temporary directory
          fs.copySync(path.join(__dirname, './test-data'), dir)
        })
        .on('end', done);
    });

    it('copy files', () => {
      assert.file([
        '.babelrc',
        '.editorconfig',
        '.eslintignore',
        '.eslintrc',
        '.gitignore',
        '.nvmrc'
      ]);
    });

    //it('installs dependencies in package.json', () => {
    //  assert.fileContent('package.json', /"babel-preset-es2017": "/);
    //});
  });
});
