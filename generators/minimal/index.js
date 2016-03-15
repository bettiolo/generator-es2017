'use strict';
var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.props = {};
  },
  initializing: function () {
    this.props.package_name = this.fs.readJSON(this.destinationPath('package.json'), {}).name;
    if (!this.props.package_name) {
      this.props.package_name = path.basename(this.destinationRoot());
    }
  },
  configuring: function () {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(),
      this.props);

    this.fs.copyTpl(
      this.templatePath("**/.*"),
      this.destinationPath(),
      this.props);
  },
  install: function () {
    this.npmInstall([
      'babel-preset-es2017',
      'babel-register'
    ], { 'save': true });

    this.npmInstall([
      'babel-eslint',
      'chai',
      'eslint',
      'eslint-config-airbnb',
      'eslint-plugin-babel',
      'eslint-plugin-react',
      'husky',
      'mocha',
      'nodemon',
      'supertest'
    ], { 'saveDev': true });
  },
  end: function () {
  }
});
