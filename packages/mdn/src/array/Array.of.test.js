// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

describe('Array', () => {
  test('of()', () => {
    expect(Array.of(7)).toEqual([7])
    expect(Array.of(1, 2, 3)).toEqual([1, 2, 3])
    // expect(Array(7)).toEqual([, , , , , ,])
    expect(Array(1, 2, 3)).toEqual([1, 2, 3])
  })
})
