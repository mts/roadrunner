// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

describe('Array', () => {
  test('copyWithin()', () => {
    var array1 = ['a', 'b', 'c', 'd', 'e']
    expect(array1.copyWithin(0, 3, 4)).toEqual(['d', 'b', 'c', 'd', 'e'])
    expect(array1.copyWithin(1, 3)).toEqual(['d', 'd', 'e', 'd', 'e'])
  })
})
