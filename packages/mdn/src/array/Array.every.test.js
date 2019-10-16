// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

describe('Array', () => {
  test('every()', () => {
    function isBelowThreshold(currentValue) {
      return currentValue < 40
    }

    const array1 = [1, 30, 39, 29, 10, 13]

    expect(array1.every(isBelowThreshold)).toEqual(true)
  })
})
