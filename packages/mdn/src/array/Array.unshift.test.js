// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

describe('Array', () => {
  test('unshift()', () => {
    var array1 = [1, 2, 3]

    expect(array1.unshift(4, 5)).toEqual(5)
    expect(array1).toEqual([4, 5, 1, 2, 3])
  })
})
