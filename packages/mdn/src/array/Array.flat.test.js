// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

describe('Array', () => {
  test('filter()', () => {
    var arr1 = [1, 2, [3, 4]]
    var arr2 = [1, 2, [3, 4, [5, 6]]]
    var arr3 = [1, 2, [3, 4, [5, 6]]]
    expect(arr1.flat()).toEqual([1, 2, 3, 4])
    expect(arr2.flat()).toEqual([1, 2, 3, 4, [5, 6]])
    expect(arr3.flat(2)).toEqual([1, 2, 3, 4, 5, 6])
  })
})
