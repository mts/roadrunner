// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

describe('Object', () => {
  test('defineProperties()', () => {
    const object1 = {}

    Object.defineProperties(object1, {
      property1: {
        value: 42,
        writable: true,
      },
      property2: {},
    })

    expect(object1.property1).toEqual(42)
  })
})
