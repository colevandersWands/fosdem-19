function handler() {                                        var new_entry = {};
  // read and process user input
  var input = document.getElementById('input').value;       new_entry['1. input'] = input;

  // pass user input through core logic
  var mapped = map(input);                                  new_entry['2. mapped'] = mapped;
  var result = sort(mapped);                                new_entry['3. result'] = result;
  var demapped = demap(result);                             new_entry['4. demapped'] = demapped;

  // write final computation to user
  var output = document.getElementById('output');           log.push(new_entry);
  output.innerHTML = demapped;
};

// in-place documentation
console.groupCollapsed('%c handler() -> (handles user actions)', 'font-weight:bold');
console.log('reads user input from dom, passes it through core logic, writes result to dom');
console.log(handler.toString());
console.groupEnd();
