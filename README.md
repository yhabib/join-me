# joinMe

Utility to join list of words with a separator and the last one with keyword.

## Install

```sh
$ npm install join-me
```

## Use

```js
const joinMe = require('join-me');

const list = ['hello', 'hallo', 'ciao', 'hola'];
let readableList = joinMe({ list }) // hello, hallo, ciao and hola

// pass extra arguments
readableList = joinMe({ list, keyword: ' und ' }) // hello, hallo, ciao und hola
readableList = joinMe({ list, separator: '|', keyword: '-' }) // hello|hallo|ciao-hola
```