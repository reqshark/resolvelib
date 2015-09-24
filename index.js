/*
 * just wanted use require('lib') in some tests instead of require('../..')
 */

var Module = require('module');
var r = require('module')._resolveFilename;

module.exports = function(libname, location) {
  Module._resolveFilename = function (f, p) {
    f = f === libname ? require('path').normalize(location) : f;
    return r.call(Module, f, p);
  }
}
