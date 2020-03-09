const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictequal = require('../strict-equality')


describe('strict-equality', () => {
  describe('compare', () => {
    it('determines inputone and inputtwo as equal numbers', () => {
      //create test data
      const inputOne = 2
      const inputTwo = 2

      //call function with test data
      const equality = strictequal(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(true)
    })

    it('determines inputone and inputtwo as equal strings', () => {
      //create test data
      const inputOne = 'a'
      const inputTwo = 'a'

      //call function with test data
      const equality = strictequal(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(true)
    })

    it('determines inputone and inputtwo as unequal numbers', () => {
      //create test data
      const inputOne = 2
      const inputTwo = 4

      //call function with test data
      const equality = strictequal(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(false)
    })

    it('determines that inputone and inputtwo as unequal', () => {
      //create test data
      const inputOne = 2
      const inputTwo = 'two'

      //call function with test data
      const equality = strictequal(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(false)
    })

    it('determines inputone andinputtwo as uneuqal because of input type', () => {
      //create test data
      const inputOne = 2
      const inputTwo = 'a'

      //call function with test data
      const equality = strictequal(inputOne, inputTwo)

      //assertions about what happens
      expect(equality).to.equal(false)
    })

  })
})