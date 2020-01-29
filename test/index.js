const assert = require('assert')
const calc = require('../src/index')

try {
    assert.equal(calc.result(), 0, 'El valor inicial no es cero')

    assert.equal(calc.sum(1,2), 3, 'El resultado de la suma deberia ser 3')
    assert.equal(calc.sum(2,2), 4, 'El resultado de la suma deberia ser 4')
    assert.equal(calc.sum(-123, 20), -103, 'El resultado de la suma deberia ser -103')
} catch (err) {
    console.error(err.message)
}
