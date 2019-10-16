// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

describe('Array', () => {
  test('some()', () => {
    const array = [1, 2, 3, 4, 5]

    const even = function(element) {
      return element % 2 === 0
    }

    expect(array.some(even)).toEqual(true)
  })
})
