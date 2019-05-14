# easy-repl

Starts a node console (repl) with whatever globals you want to preload it with.

## Purpose

I miss `rails console` when working in js, so this facilitates that sort of things.

## Running

Please, run this in node 11 and use `node --experimental-repl-await` for awesome top-level async support 🎆

```javascript
const dog = {
  bark: () => 'Woof, woof'
  barkAsync: async () => Promise.resolve(dog.bark())
}

const repl = require('repl-with-globals')

repl({ dog, asyncFunction })
// > dog.bark()
// 'Woof, woof'
// > await dog.barkAsync()
// 'Woof, woof'
```

## Requirements

I don't know how far back it goes, but to really get the 
