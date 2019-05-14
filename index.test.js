import test from "ava"
import repl from "./"

test('it should have the object properties in the context', (t) => {
  const dog = {
    name: 'toby',
    color: 'red'
  }
  const { context } = repl({ dog })
  t.is(context.dog.name, dog.name)
  t.is(context.dog.color, dog.color)
})

