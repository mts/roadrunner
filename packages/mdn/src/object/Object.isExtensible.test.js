// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible

describe('Object', () => {
  test('isExtensible()', () => {
    const object1 = {}

    expect(Object.isExtensible(object1)).toEqual(true)

    Object.preventExtensions(object1)

    expect(Object.isExtensible(object1)).toEqual(false)
  })
})
