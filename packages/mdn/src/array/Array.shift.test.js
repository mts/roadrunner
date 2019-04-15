// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

describe('Array', () => {
  test('shift()', () => {
    var array1 = [1, 2, 3]

    var firstElement = array1.shift()

    expect(array1).toEqual([2, 3])
    expect(firstElement).toEqual(1)
  })
})
