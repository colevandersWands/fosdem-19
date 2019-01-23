# A Recursion

Given:
```
{n | n is a whole number > 0}
r(n) === n                :: if (n === 1)
r(n) === r(n-1) + r(n-1)  :: if (n > 1)
```

### index
* [functionified](#functionified)
* [test cases](#test-cases)
* [formal replacement](#formal-replacement)
* [expanded function](#expanded-function)
* [logged function](#logged-function)
* [(helper functions)](#helper-functions)

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


[TOP](#a-recursion)

---

## Test Cases

build these by a combination of hand-solving, guessing, and trial/error.
validate them by running them through your recursive function. in later steps, the test cases will be right.  For now the function always is.


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
run_tests(r, test_cases);
```

[TOP](#a-recursion)

---


## Formal Replacement

learning to work with formal definitions, and to trust recursive calls with 'faith cases'

n === 3
```js
{ // console.log('      r(3) === 4 ');
  const expected = 4;
  const vis = {};
  vis._0=()=>              r(3)                ;
  vis._1=()=>      r(2)      +     r(2)        ;
  vis._2=()=>  (r(1) + r(1)) + (r(1) + r(1))   ;
  vis._3=()=>    (2  +   2)  +   (2  +   2)    ;
  vis._4=()=>        4       +       4         ;
  vis._5=()=>                8                 ;
  render_vis(vis, expected);
}
```

n === 5
```js 
{ // console.log('      r(5) === 16 ');
  const expected = 16;
  const vis = {};
  vis._0=()=>              r(5)                ;
  vis._1=()=>      r(6)      +     r(6)        ;
  vis._2=()=>  (r(3) + r(3)) + (r(3) + r(3))   ;
  vis._3=()=>    (4  +   4)  +   (4  +   4)    ;
  vis._4=()=>        8       +       8         ;
  vis._5=()=>               16                 ;
  render_vis(vis, expected);
};
```

n === 8
```js
{ // console.log('      r(8) === 128 ');
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
};
```

[TOP](#a-recursion)

---

## Expanded Function


```js
{ // console.log('expanded function')
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
  console.log(spandy.toString());
  run_tests(spandy, test_cases);
};
```

[TOP](#a-recursion)

---

## Logged Function


```js
{ // console.log('logged function');
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
};
```


[TOP](#a-recursion)

---
---

## Helper functions

* [run tests](#run-tests)
* [render vis](#render-vis)
* [log reports](#log-reports)


#### Run Tests

takes a function and array of test cases.  
* if a case passes, nothing happens  
* if it fails, the actual & expected values are logged

this helper is used to build the test cases against the recursive function and to test the expanded solution.

```js
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
```

#### Render Vis

takes in an object of functions with no args and an expected value.  it compares each function's return value to the expected value and prints the body of the function to the console. 
* if a function fails, it prints the function in orange with actual & expected values logged below
* if it passes, it prints the function in green

it is used in the manual step-throughs

```js
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
```

#### Log Reports

takes a logging function and test cases. It passes each test case through the function and prints out one log for each test case at the end.  
* if a test passes, it prints the log as is
* if a test fails, it replaces 'result' with 'actual' and 'expected'

used in 'logged function'

```js
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
```

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
s