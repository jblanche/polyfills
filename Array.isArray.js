/*
 * Array.isArray polyfill
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray#Compatibility
 */

if(!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
