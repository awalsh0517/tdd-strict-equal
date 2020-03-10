const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strict-equality')


describe('strict-equality', () => {
  describe('compare', () => {
    it('determines 2 and 2 are equal numbers', () => {
      //create test data
      const inputOne = 2
      const inputTwo = 2

      //call function with test data
      const equality = strictEqual(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(true)
    })

    it('determines "a" and "a" are equal strings', () => {
      //create test data
      const inputOne = 'a'
      const inputTwo = 'a'

      //call function with test data
      const equality = strictEqual(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(true)
    })

    it('determines 2 and 4 are not equal', () => {
      //create test data
      const inputOne = 2
      const inputTwo = 4

      //call function with test data
      const equality = strictEqual(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(false)
    })

    it('determines that 2 and "2" are not equal', () => {
      //create test data
      const inputOne = 2
      const inputTwo = '2'

      //call function with test data
      const equality = strictEqual(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(false)
    })

  })
})
