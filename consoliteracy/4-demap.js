// arrays of charcodes
var demap_tests = [
  {name: 'SERR', args: [[83, 69, 82, 82]], expected: 'SERR'},
  {name: ' PBQR', args: [[32, 80, 66, 81, 82]], expected: ' PBQR'},
  {name: ' CVMM!', args: [[32, 67, 86, 77, 77, 33]], expected: ' CVMM!'},
];
function demap(arr) {
  var de_charred = [];
  for (var i = 0; i < arr.length; i++) {
    de_charred.push(String.fromCharCode(arr[i]));
  };

  var de_mapped = de_charred.join('');

  return de_mapped;
};

// in-place documentation
console.groupCollapsed('%c demap(arr[charcodes]) -> string', 'font-weight:bold');
console.log('takes in an array of charcodes, returns the corresponding string');
console.log(demap.toString());
console.log(demap_tests);
console.groupEnd();
run_tests(demap, demap_tests, false);