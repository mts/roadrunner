// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

describe('Object', () => {
  test('toString()', () => {
    function Dog(name) {
      this.name = name
    }

    var dog1 = new Dog('Gabby')

    Dog.prototype.toString = function dogToString() {
      return '' + this.name
    }

    expect(dog1.toString()).toEqual('Gabby')
  })
})
