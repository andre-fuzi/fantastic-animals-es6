/* eslint-disable */
const { series, parallel } = require('gulp')

const clean = require('./build/clean')
const eslint = require('./lint/eslint')
const jsCompiler = require('./build/scripts-builder')
const sassCompiler = require('./build/sass')
const svgMinifier = require('./build/svgmin')
const broswerSyncInit = require('./dev/browserSync')
const watchFiles = require('./dev/watch')

exports.eslint = eslint

exports.watch = series(
  clean,
  eslint,
  parallel(svgMinifier, sassCompiler, jsCompiler),
  parallel(broswerSyncInit, watchFiles)
)

exports.default = series(
  clean,
  eslint,
  parallel(svgMinifier, sassCompiler, jsCompiler)
)
