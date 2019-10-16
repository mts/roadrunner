// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

describe('Array', () => {
  test('fill()', () => {
    const array1 = [1, 2, 3, 4]

    expect(array1.fill(0, 2, 4)).toEqual([1, 2, 0, 0])
    expect(array1.fill(5, 1)).toEqual([1, 5, 5, 5])
    expect(array1.fill(6)).toEqual([6, 6, 6, 6])
  })
})
