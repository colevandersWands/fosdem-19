function run_tests(_target, _cases, _log) {
  for (let t_case of _cases) {
    let expected = t_case.expected;

    let actual = _target(...t_case.args);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else if ( typeof expected === 'number' && isNaN(expected) ) {
      pass = isNaN(actual);
    } else {
      pass = actual === expected;
    };

    if (!pass && _log) {
      const report = _target(...t_case.args, true);
      console.groupCollapsed(`%c  ${t_case.name}: \n`, 'color:orange');
      console.log(`%c    actual: ${typeof report.result},`, 'color:red', report.result);
      console.log(`%c    expected: ${typeof expected},`, 'color:blue', expected);
      console.log(`   log: `, report.log);
      console.groupEnd();
    } else if (!pass) {
      console.groupCollapsed(`%c  ${t_case.name}: \n`, 'color:orange');
      console.log(`%c    actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c    expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};