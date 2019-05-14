const repl = require('repl');

module.exports = function easyRepl(obj) {
  const instance = repl.start()
  for (key in obj) {
    instance.context[key] = obj[key]
  }
  return instance
}
