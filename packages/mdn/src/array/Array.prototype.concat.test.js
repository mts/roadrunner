// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

describe('Array', () => {
  test('isArray()', () => {
    var array1 = ['a', 'b', 'c']
    var array2 = ['d', 'e', 'f']

    expect(array1.concat(array2)).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  })
})
