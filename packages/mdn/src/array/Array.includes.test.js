// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

describe('Array', () => {
  test('includes()', () => {
    var array1 = [1, 2, 3]
    var pets = ['cat', 'dog', 'bat']

    expect(array1.includes(2)).toEqual(true)
    expect(pets.includes('cat')).toEqual(true)
    expect(pets.includes('at')).toEqual(false)
  })
})
