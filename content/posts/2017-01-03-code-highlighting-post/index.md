---
title: "Syntax Highlighting Post"
slug: code-highlighting-post
cover: ./cover.png
generate-card: false
date: 2017-01-03
language: en
tags:
    - gatsby
---

## Vue.js


Vue (pronounced /vjuː/, like **view**) is a **progressive framework** for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with [modern tooling](single-file-components.html) and [supporting libraries](https://github.com/vuejs/awesome-vue#components--libraries).

```html
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('loadLoggedInUser')
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  height: 100%;
}
</style>
```

## JavaScript, JSX and highlighted lines

```js{7}
class ShoppingList extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div className="shopping-list">
        <h1>Shopping List for {user}</h1>
        <ul>
          <li>Gatsby</li>
          <li>React</li>
          <li>GraphQL</li>
        </ul>
      </div>
    );
  }
}
```

To highlight a line: ` ```js{lineNumber}`.

## TypeScript

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```


## SCSS

```scss
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}

%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}
```