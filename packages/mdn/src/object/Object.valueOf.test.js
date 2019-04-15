// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

describe('Object', () => {
  test('valueOf()', () => {
    function MyNumberType(n) {
      this.number = n
    }

    MyNumberType.prototype.valueOf = function() {
      return this.number
    }

    const object1 = new MyNumberType(4)

    expect(object1 + 3).toEqual(7)
  })
})
