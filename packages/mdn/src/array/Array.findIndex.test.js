// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

describe('Array', () => {
  test('findIndex()', () => {
    const array1 = [5, 12, 8, 130, 44]

    function isLargeNumber(element) {
      return element > 13
    }

    expect(array1.findIndex(isLargeNumber)).toEqual(3)
  })
})
