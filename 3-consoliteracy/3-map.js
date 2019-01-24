var map_tests = [
  {name: 'SERR', args: ['SERR'], expected: [83, 69, 82, 82]},
  {name: ' PBQR', args: [' PBQR'], expected: [32, 80, 66, 81, 82]},
  {name: '" CVMMN!" (1)', args: [' CVMMN!'], expected: [32, 67, 86, 77, 77, 78, 33]},
];
function map(str) {
  var split_str = str.split('');

  var mapped_arg = [];
  for (var i = 0; i < split_str.length; i++) {
    mapped_arg.push(split_str[i].charCodeAt(0));
  };

  return mapped_arg;
};

// in-place documentation
console.groupCollapsed('%c map(string) -> arr[charcodes]', 'font-weight:bold');
console.log('takes in a string and maps it to an array of charcodes');
console.log(map.toString());
console.log(map_tests);
console.groupEnd();
run_tests(map, map_tests, false);