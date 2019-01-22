{ console.groupCollapsed('%c--- -- a recursion -- ---', 'font-style:italic');

// paste challenge here

console.groupEnd();
console.groupCollapsed('%c--- translated to JS ---', 'font-style:italic');

  function r() {
    // convert challenge to a function
  };
  console.log(r.toString());

console.groupEnd();
console.groupCollapsed('%c--- test cases ---', 'font-style:italic');

  const test_cases = [
      {name: '', args: [], expected: null},
      // build test cases
    ];
  console.log(test_cases);
  run_tests(r, test_cases);

console.groupEnd();
console.groupCollapsed('%c--- manual replacement ---', 'font-style:italic');

  // practice applying formal replacement
  { console.log('%c\t   r(x) === y ', 'font-weight:bold');
    const expected = 4;
    const vis = {};
    vis._0=()=>  
    vis._1=()=>  
    vis._2=()=>  
    vis._3=()=>  
    vis._4=()=>  
    vis._5=()=>  
    render_vis(vis, expected);
  }


console.groupEnd();
console.groupCollapsed('%c--- expanded ---', 'font-style:italic');

  // fill in the blanks to expand this recursion
  function spandy() {
    const is_base = true;
    if (is_base) {
      const turnt = null;
      return turnt;
    } else {
      const broke = null;
      // adjust to your recursion
      // const rec_l = null;
      // const rec_r = null;
      const built = null;
      return built;
    };
  };
  console.log(spandy.toString())
  run_tests(spandy, test_cases)

console.groupEnd();
console.groupCollapsed('%c--- logged ---', 'font-style:italic');

  // 
  function logged(n) {                  const log = {'0. n':n};
    const is_base = true;               log['1. base'] = is_base;
    if (is_base) {
      const turnt = null;               log['2. turnt'] = turnt;
      return {result:turnt, log};
    } else {
      const broke = null;               log['2. broke'] = broke;
      // adjust to your recursion
      // const rec_log = logged(broke);    log['3. rec l'] = rec_log.log;
      // const rec_rog = logged(broke);    log['4. rec r'] = rec_rog.log;
      //   const rec_l = rec_log.result;
      //   const rec_r = rec_rog.result;
      const built = null;               log['4. built'] = built;
      return {result:built, log};
    };
  };
  log_reports(logged, test_cases)

console.groupEnd();






// testing utils

function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.groupCollapsed(`%c ${t_case.name}: \n`, 'color:orange');
      console.log(`%c   actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c   expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};

function render_vis(_vis, _expected) {
  const keys = Object.keys(_vis);
  for (let i = 0; i < keys.length; i++) {
    const step = keys[i];
    const actual = _vis[step]();
    if (actual !== _expected) {
      console.groupCollapsed(`%c${i}:${_vis[step].toString()}`, 'color:orange');
      console.log(`%c   actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c   expected: ${typeof _expected},`, 'color:blue', _expected);
      console.groupEnd();
    } else {
      console.log(`%c${i}:${_vis[step].toString()}`, 'color:green');
    };
  };
};

function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
    const actual = _target(...t_case.args);
    if (actual.result !== t_case.expected) {
      const failog = {};
      failog.actual = actual.result;
      failog.expected = t_case.expected;
      failog.log = actual.log;
      report[t_case.name] = failog;
    } else {
      report[t_case.name] = actual;
    };
  };
  console.log(report)
};
}