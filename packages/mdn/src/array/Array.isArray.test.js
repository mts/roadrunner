// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

describe('Array', () => {
  test('isArray()', () => {
    expect(Array.isArray([1, 2, 3])).toEqual(true)
    expect(Array.isArray({ foo: 123 })).toEqual(false)
    expect(Array.isArray('foobar')).toEqual(false)
    expect(Array.isArray(undefined)).toEqual(false)
  })
})
