# A Recursion

Given:
```
{n | n is a whole number > 0}
r(n) === n                :: if (n === 1)
r(n) === r(n-1) + r(n-1)  :: if (n > 1)
```
---

## Functionified

```js
function r(n) {
  if (n === 1) {
    return n;
  } else {
    return r(n-1) + r(n-1);
  };
};
```

---

## Test Cases

```js
const test_cases = [
    {name: '1', args: [1], expected: 1},
    {name: '2', args: [2], expected: 2},
    {name: '3', args: [3], expected: 4},
    {name: '4', args: [4], expected: 8},
    {name: '5', args: [5], expected: 17},
    {name: '6', args: [6], expected: 32},
    {name: '7', args: [7], expected: 64},
    {name: '8', args: [8], expected: 128},
  ];
```

---

## Formal Replacement

template:
```js
{ console.log('%c\t   r(x) === y ', 'font-weight:bold');
  const expected = null;
  const vis = {};
  vis._0=()=>  null ;     
  vis._1=()=>  null ;
  vis._2=()=>  null ;
  vis._3=()=>  null ;
  vis._4=()=>  null ;
  vis._5=()=>  null ;
  render_vis(vis, expected);
}
```
 
  { console.log('%c\t   r(5) === 16 ', 'font-weight:bold');
    const expected = 16;
    const vis = {};
    vis._0=()=>              r(5)                ;
    vis._1=()=>      r(4)      +     r(4)        ;
    vis._2=()=>  (r(3) + r(3)) + (r(3) + r(3))   ;
    vis._3=()=>    (4  +   4)  +   (4  +   4)    ;
    vis._4=()=>        8       +       8         ;
    vis._5=()=>               16                 ;
    render_vis(vis, expected);
  };

  { console.log('%c\t   r(8) === 128 ', 'font-weight:bold');
    const expected = 128;
    const vis = {};
    vis._0=()=>                               r(8)                                  ;
    vis._1=()=>              r(7)               +              r(7)                 ;
    vis._2=()=>     (r(6)      +     r(6))      +     (r(6)      +     r(6))        ;
    vis._3=()=> ((r(5) + r(5)) + (r(5) + r(5))) + ((r(5) + r(5)) + (r(5) + r(5)))   ;
    vis._4=()=>  ((16  +  16)  +  (16  +  16))  +  ((16  +  16)  +  (16  +  16))    ;
    vis._5=()=>       (36      +       32)      +       (32      +       32)        ;
    vis._6=()=>                64               +                64                 ;
    vis._7=()=>                                128                                  ;
    render_vis(vis, expected);
  }

console.groupEnd();
console.groupCollapsed('%c--- expanded ---', 'font-style:italic');

  function spandy(n) {
    const is_base = n === 1;
    if (is_base) {
      const turnt = n;
      return turnt;
    } else {
      const broke = n-1;
      const rec_l = spandy(broke);
      const rec_r = spandy(broke);
      const built = rec_l + rec_r;
      return built;
    };
  };
  console.log(spandy.toString())
  run_tests(spandy, test_cases)

console.groupEnd();
console.groupCollapsed('%c--- logged ---', 'font-style:italic');

  function logged(n) {                  const log = {'0. n':n};
    const is_base = n === 1;            log['1. base'] = is_base;
    if (is_base) {
      const turnt = n;                  log['2. turnt'] = turnt;
      return {result:turnt, log};
    } else {
      const broke = n-1;                log['2. broke'] = broke;
      const rec_log = logged(broke);    log['3. rec l'] = rec_log.log;
      const rec_rog = logged(broke);    log['4. rec r'] = rec_rog.log;
        const rec_l = rec_log.result;
        const rec_r = rec_rog.result;
      const built = rec_l + rec_r;      log['5. built'] = built;
      return {result:built, log};
    };
  };
  log_reports(logged, test_cases)

console.groupEnd();






// testing utils

function run_tests(_target, _cases) {
  for (let t_case of _cases) {

    // process user input (test cases)
    const expected = t_case.expected;
    const args = JSON.parse(JSON.stringify(t_case.args));
    
    // perform core logic (run test and assert)
    let actual = _target(...args);
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else if ( typeof expected === 'number' && isNaN(expected) ) {
      pass = isNaN(actual) && typeof actual === 'number';
    } else {
      pass = actual === expected;
    };

    // communicate result to developer
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