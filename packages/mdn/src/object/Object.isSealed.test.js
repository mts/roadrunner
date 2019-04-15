// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed

describe('Object', () => {
  test('isSealed()', () => {
    const object1 = {
      property1: 42,
    }

    expect(Object.isSealed(object1)).toEqual(false)

    Object.seal(object1)

    expect(Object.isSealed(object1)).toEqual(true)
  })
})
