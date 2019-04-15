// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf

describe('Object', () => {
  test('isPrototypeOf()', () => {
    function object1() {}
    function object2() {}

    object1.prototype = Object.create(object2.prototype)

    const object3 = new object1()

    expect(object1.prototype.isPrototypeOf(object3)).toEqual(true)
    expect(object2.prototype.isPrototypeOf(object3)).toEqual(true)
  })
})
