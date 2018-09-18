---
title: "Typical JavaScript interview exercises (explained)"
language: en
cover: ./banner.jpg
slug: js-exercises-explained
date: "2017-10-16"
author: maxpou
tags:
    - JS
---

Few weeks ago I found on my twitter feed a very interesting blog post: ["The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)"](https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-%28written-by-a-Frontend-Engineer%29) written by Boris Cherny.  
As you may guess, the author show some interesting questions to ask during a job interview. Questions are splitted in 4 parts: Concepts, Coding, Debugging, and System Design. Here, I'll focus on the **Debugging** part.

I really like theses question, because they deal with the specificities of JavaScript: object comparison, event loop, scope, this, prototypal inheritance and the equal operator combined with [Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).

Before reading the solution, I'd recommend you to find the answer by yourself.

## Exercise 1

> I want this code to log out "hey amy", but it logs out "hey arnold" - why?

```js
function greet (person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })
```

<hr>

**Answer**

Here the problem is the following: `{ name: 'amy' } != { name: 'amy' }`. When comparing two object with equality or strict equality, JavaScript gonna compare the related internal references. Here, these two objects have the same properties and the same value. But in memory, this is 2 different objects.

A solution here could be:

```js
function greet (person) {
  if (person.name === 'amy') {
    return 'hey amy'
  }
  return 'hey arnold'
}
greet({ name: 'amy' }) // "hey amy"
```

## Exercise 2

> I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what I expect (this is a bug you run into once in a while, and some people love to ask about it in interviews).

```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
```

<hr>

**Problem**

I like this one because it's a bit trickier and it deal with scope and the JavaScript Event Loop. 

The classic pitfall here is the **Zero delays**. `setTimeout(callback, 0)` doesn't mean that the callback will be fire after zero milliseconds.

Here's what happen on the event loop side:

1. Current Call Stack is set to the first setTimeout(). 
2. windows.setTimeout() is considered as a Web APIs (for better **Non-Blocking I/O**). So the call stack send this part of code to correct Web APIs. 
After 0 milliseconds, the callback (here an anonymous function) would be send to the Queue (not to the call stack).
3. As the call stack is free, for-loop can continue to the second setTimeout
...(repeat after we meet this condition i < 4)...
4. Now the loop is over and `i === 4`. JS can now execute the callback queue one by one. Each console.log(i) will print the 4.

Do you feel lost? I hope this animation will better helps you!
<iframe width="560" height="315" src="https://www.youtube.com/embed/CzXPF3zwWGs" frameborder="0" allowfullscreen></iframe>

*Animation made with [Loupe (try it it's fun!)](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlN0YXJ0ISIpOwoKZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHsKICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKICAgICAgY29uc29sZS5sb2coaSk7CiAgfSwgMCk7Cn0KCmNvbnNvbGUubG9nKCJFbmQhIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)*


The second problem is related to scope. The 4 instance of setTimeout function share the same instance of `i`.

```js
var foo = 'bim'
//                                ▼ this is a reference to variable foo, not his associated value ('bim') 
var getFoo = function () { return foo }
foo = 'boum'
 
getFoo() // 'boum'
```

<hr>

**Answer**

So, there are several solutions available:

* use an Immediately-Invoked Function Expression *a.k.a.* IIFE. The 'wrapper function' will run as soon as she's defined.

    ```js
    for (let i = 0; i < 4; i++) {
      (function (i) {
        setTimeout(() => console.log(i), 0)
      })(i)
    }
    ```

* switch to `let` keyword (instead of `var`). This (new?) keyword makes scope a bit more easy to understand.

    ```js
    for (let i = 0; i < 4; i++) {
      setTimeout(() => console.log(i), 0)
    }
    ```


## Exercise 3

> I want this code to log out "doggo", but it logs out undefined!

```js
let dog = {
  name: 'doggo',
  sayName () {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()
```

<hr>

**Answer**

The previous code return `undefined`. Why? Looks, on the first let condition, we define an object with 2 attributes (name and the function sayName()). Then on the second let, we copy the attribute sayName, which is a function into another variable. And then, we call this variable out of her context (in the global one). The function sayName() will return window.name (global if the environment is Node). And `typeof window.name === "undefined"`.

* 👎 (the dirty one). If we want to keep the sayName variable. Then we need to bind the dog the context on it:
    
    ```js
    sayName.bind(dog)()
    // or:
    dog.sayName.bind(dog)()
    ```
    *This is dirty, right?* 🤠

* 👍 call the function directly on her original context

    ```js
    let dog = {
      name: 'doggo',
      sayName () {
        console.log(this.name)
      }
    }
    dog.sayName() // will log "doggo"
    ```


## Exercise 4

> I want my dog to bark(), but instead I get an error. Why?

```js
function Dog (name) {
  this.name = name
}
Dog.bark = function () {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
```

<hr>

**Answer**

We got the following error *TypeError: fido.bark is not a function*. On the previous code, we set the bark function on an another function (`Dog()`), which is also a constructor. Is it possible because in JavaScript, functions are objects.


2 solutions:

* 👎 (the dirty one). fido.bark isn't a function but `Dog.bark` is. So let's use this one and solve the `this` issue with a function.prototype.bind() as in the exercise above:

    ```js
    var boundedBark = Dog.bark.bind(fido)
    boundedBark() // "fido says woof"
    ``` 
    But from my point of view using function.prototype.bind() *(almost always)* lead to confusion.

* 👍 set bark() on the Dog's prototype
    
    ```js
    function Dog (name) {
      this.name = name
    }

    Dog.prototype.bark = function () {
      console.log(this.name + ' says woof')
    }

    let fido = new Dog('fido')
    fido.bark() // "fido says woof"
    ```

    We can also use the class keyword (ES2015) which is just a syntactic sugar to the previous code.

    ```js
    class Dog {
      constructor (name) {
        this.name = name
      }

      bark () {
        console.log(this.name + ' says woof')
      }
    }

    let fido = new Dog('fido')
    fido.bark() // "fido says woof"
    ```


## Exercise 5

> Why does this code return the results that it does?

```js
function isBig (thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true
```

<hr>

**Answer**

We are using here the simple equality operator (*e.g.* ==) by opposition to strict comparison (*e.g.* ===). With this operator, it's not mandatory to compare the same type.

* `isBig(1)` pass the condition `thing == 1` as expected.
* `isBig([2])` will pass the condition `thing == 2`. When comparing an array to a number, the array will be converted to a number. This is a part of the [Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3). According to this algorithm, if we compare a number with an Object *(reminder: arrays are object in JS)*, this array will be converted to an array. Here, there is only one item inside so `[2] == 2`.

Because this algorithm is obscure for the most common developers, we should aboid this operator ([ESLint eqeqeq rule is your friend 👍](http://eslint.org/docs/rules/eqeqeq)).

```js
// weird results
[] == ![]     // true
[] == false   // true

// Non transitive relation
"1" == true   // true
"01" == true  // true
"01" == "1"   // false
```


## Exercise 6 (bonus)

> How to preserve the immutability on my heroes list?

```js
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

const newHeroes = heroes.map(h => {
  h.name = h.name.toUpperCase()
  return h
})
```

Do you have any idea? 🙂  
*answer will be in the next post!*
