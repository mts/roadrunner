// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

describe('Array', () => {
  test('find()', () => {
    var array1 = [5, 12, 8, 130, 44]

    var found = array1.find(function(element) {
      return element > 10
    })

    expect(found).toEqual(12)
  })
})
