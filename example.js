const dog = {
  bark: () => 'Woof, woof',
  barkAsync: async () => Promise.resolve(dog.bark())
}

const repl = require('./index')

repl({ dog })
