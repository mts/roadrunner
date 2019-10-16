// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

describe('Array', () => {
  test('sort()', () => {
    const months = ['March', 'Jan', 'Feb', 'Dec']
    const array1 = [1, 30, 4, 21, 100000]

    expect(months.sort()).toEqual(['Dec', 'Feb', 'Jan', 'March'])
    expect(array1.sort()).toEqual([1, 100000, 21, 30, 4])
  })
})
