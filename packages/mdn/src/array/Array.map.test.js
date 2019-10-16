// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

describe('Array', () => {
  test('map()', () => {
    const array1 = [1, 4, 9, 16]

    const map1 = array1.map(x => x * 2)
    expect(map1).toEqual([2, 8, 18, 32])
  })
})
