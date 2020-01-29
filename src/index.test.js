const chai = require('chai')
const assert = chai.assert
const calc = require('./index')

describe('index', function () {
    context('inicializacion', function () {
        it('debe iniciar con 0', function () {
            assert.equal(calc.result(), 0)
        })

        it.skip('debe volver la suma de los dos valores', function () {
            assert.equal(calc.sum(5,10), 15)
        })

        it('este es un test para despues')
    })
})
