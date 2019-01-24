learning objectives:
* tracing code in pytut
* logging & tracing code in chromedev
* understanding code as a series of values stored in variables


you can complete these exercises directly from your fork by inspecting this page and copy-pasting the snippets into devtools console. fill in your solutions by editing this page, writing in the actual values for each challenge

### The Challenges
* [variables](#variables)  
    * value swap
    * block scope 'let'
    * block scope 'var'
* [reference types](#reference-types)  
    * no-copy array
    * yes-copy array
    * dots vs brackets
* [conditionals](#conditionals)  
* [iteration](#iteration)

---
---

## Variables 

**Value Swap**    
[interactive example](https://github.com/elewa-academy/value-swap)  

the code:
```js
{ // pytut link -> https://goo.gl/27fPqs
  const expected = ;                const log = [{expected}];

  let a = ;                        
  let b = ;                        
  let temp = ;                      log.push({a,b,temp});
   
  temp = b;                         log.push({temp});
  b = a;                            log.push({b});
  a = temp;                         log.push({a});

  const actual = temp;              log.push({actual});
  
  console.assert(actual === expected, log);
}
```
the values:
```js
a:1, b:2, temp:3            --> ?
a:'a', b:'b', temp:'temp'   --> ?
a:true, b:false, temp:null  --> ?
a:'', b:0, temp:undefined   --> ?
```
your notes:

---

**Block Scope 'let'**

the code:
```js
{ // pytut link -> https://goo.gl/Ym63eU
  const expected = ;              const log = [{expected}];

  let a = ;                        
  let b = ;  
  let c = ;                       log.push({a,b,c});

  {
    let a = b;                    log.push({a});
    {
       a = c;                     log.push({a});
    }
    a = a;                        log.push({a});
  }

  const actual = a;               log.push({actual});
  
  console.assert(actual === expected, log);
}
```
the values:
```js
a:1, b:2, c:3         --> ?
a:'', b:0, c:false    --> ?
a:true, b:false, c:9  --> ?
```
your notes:  

---

**Block Scope 'var'**  
(refresh the page each time before running this exercise)  
[interactive example](https://github.com/elewa-academy/hoisting) 

the code:
```js
{ // pytut link -> https://goo.gl/rJaPQo
  const expected = ;              const log = [{expected}];
                       
  let b = ;  
  let c = ;                       log.push({a,b,c});

  {
    var a = b;                    log.push({a});
    {
       a = c;                     log.push({a});
    }
    a = a;                        log.push({a});
  }

  const actual = a;               log.push({actual});
  
  console.assert(actual === expected, log);
}
```
the values:
```js
b:2, c:3         --> ?
b:0, c:false     --> ?
b:false, c:9     --> ?
```
your notes:  

---
---

## Reference Types


**no-copy arrays**  
[more about this](https://github.com/elewa-academy/reference-vs-value)

the code:
```js
{ // pytut link -> https://goo.gl/xX64Cg
  const expected = [];            const log = [{expected}];
                       
  const a = [];                     
  const b = [];                      
  const x = ;
  const y = ;                     log.push({a:a.slice(),b:b.slice(),x,y});
  
  a.push(b);                      log.push(a.slice());
  b.push(x);                      log.push(b.slice());
  a.push(b);                      log.push(a.slice());
  b.push(y);                      log.push(b.slice());
  a.push(b);                      log.push(a.slice());

  const actual = a;               log.push({actual:actual.slice()});
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
x:2, y:3         --> ?
x:'x', y:'y'     --> ?
x:null, y:0      --> ?
```
your notes:  

---


**yes-copy arrays**  
[more about this](https://github.com/elewa-academy/reference-vs-value)

the code:
```js
{ // pytut link -> https://goo.gl/UCT8Co
  const expected = [];            const log = [{expected}];
                       
  const a = [];                     
  const b = [];                      
  const x = ;
  const y = ;                     log.push({a:a.slice(),b:b.slice(),x,y});
  
  a.push(b.slice());              log.push(a.slice());
  b.push(x);                      log.push(b.slice());
  a.push(b.slice());              log.push(a.slice());
  b.push(y);                      log.push(b.slice());
  a.push(b.slice());              log.push(a.slice());

  const actual = a;               log.push(actual.slice());
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
x:2, y:3         --> ?
x:'x', y:'y'     --> ?
x:null, y:0      --> ?
```
your notes:  

---

**Dots vs Brackets**  
[extra resource](https://github.com/elewa-academy/variables-and-types/tree/master/dots-vs-brackets) 

the code:
```js
{ // pytut link -> https://goo.gl/2G6nuu
  const expected = [];            const log = [{expected}];

  const arr = [];
  const obj = {a: 1, b: 2};
  const a = ;
  const b = ;                     log.push({arr:arr.slice(), obj, a, b})

  arr.push(obj.a);                log.push(arr.slice());
  arr.push(obj.b);                log.push(arr.slice());

  arr.push(obj[a]);               log.push(arr.slice());
  arr.push(obj[b]);               log.push(arr.slice());

  const actual = arr;             log.push(actual.slice());
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
a:'a', b:'b'      --> ?
a:'a', b:'a'      --> ?
a:1, b:2          --> ?
a:2, b:1          --> ?
```
your notes:  

---
---


## Conditionals


**d**  

the code:
```js
{ // pytut link -> https://goo.gl/xX64Cg
  const expected = [];            const log = [{expected}];
                       
  const a = [];                     
  const b = [];                      
  const x = ;
  const y = ;                     log.push({a:a.slice(),b:b.slice(),x,y});
  
  a.push(b);                      log.push(a.slice());
  b.push(x);                      log.push(b.slice());
  a.push(b);                      log.push(a.slice());
  b.push(y);                      log.push(b.slice());
  a.push(b);                      log.push(a.slice());

  const actual = a;               log.push({actual:actual.slice()});
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
x:2, y:3         --> ?
x:'x', y:'y'     --> ?
x:null, y:0      --> ?
```
your notes:  

---


```js
{ // pytut link -> https://goo.gl/o1KP2E
  const expected = ;                      const log = [{expected}]

  let acumul = ;             
  let stepper = ;                        log.push({acumul, stepper});
    
  while (stepper < 3) {                   log.push({while_condition: stepper<3});
    const two_times_step = stepper * 2;   log.push({two_times_step})
    acumul += two_times_step;             log.push({acumul});
    stepper++;                            log.push({stepper});
  }

  const actual = acumul;                  log.push({actual})
  
  console.assert(actual === expected, log);
}
```
```
    acumul = 3, stepper = -1 --> ?
    acumul = 2, stepper = 0  --> ?
    acumul = 1, stepper = 1  --> ?
    acumul = 0, stepper = 2  --> ?
    acumul = -1, stepper = 3 --> ?
```
___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
