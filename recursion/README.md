# Recursion

### Index
* [how to do this](#how-to-do-this)
* [recursive starters](#recursive-starters)
* [helper functions](#helper-functions)

---

## How to do this

* study the examples to see what it's all about.
    * [example 1](./example-1.md)
    * [example 1](./example-1.md)
* copy all the helper functions to the console and hit enter so they're around for later
    * [helper functions](#helper-functions)
* complete the provided starters markdowns
    * [starter 1](#starter-1)
    * [starter 2](#starter-2)
* for more practice
    * copy-paste [template.md](./template.md) into a new file from github
    * choose an exercise, paste it into the top of your empty template
    * fill out the template
* for endless practice
    * come up with random recursive definitions and study them
    * how does the same function behave with different input sets?
    * ...

[TOP](#recursion)

---

## recursive starters



```
for a > 0, b < 0
r(a,b) === a + b        :: b > a
r(a,b) === r(a-1, b+1)  :: !(b > a)
```

[TOP](#recursion)

---


## helper functions

The functions necessary to run this exercise in the console.  Paste each one into the console and hit enter, then the exercise templates will run smoothly.


runs a function against it's test cases
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

utility for manual step-through
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

prints recursion logs to the console
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

[TOP](#recursion)
___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
