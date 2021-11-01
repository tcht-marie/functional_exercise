const assert = require('chai').assert;

const course01 = require('../');

const names = ['alice', 'BoB', 'Tiff', 'Bruce', 'John'];

describe('Basics', _ => {
  describe('Greet the world', _ => {
    it('should return `Hey, world!`', done => {
      assert.equal(course01.greetWorld(), 'Hey, world!')
      done()
    })
  })

  describe('Greet someone', _ => {
    names.map((name, index) => {
      it(`should return 'Hey, ${name}!'`,  done => {
        assert.equal(course01.greet(name).toLowerCase(), `Hey, ${name}!`.toLowerCase())
        done()
      })
    })
  })

  describe('Greet someone with capitalized letter', _ => {
    names.map((name, index) => {
      const capitilizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      it(`should return 'Hey, ${capitilizedName}!'`,  done => {
        assert.equal(course01.capitilizedGreet(name), `Hey, ${capitilizedName}!`)
        done()
      })
    })
  })
})
