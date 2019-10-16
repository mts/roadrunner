// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

describe('Array', () => {
  test('entries()', () => {
    const array1 = ['a', 'b', 'c']

    const iterator1 = array1.entries()

    expect(iterator1.next().value).toEqual([0, 'a'])
    expect(iterator1.next().value).toEqual([1, 'b'])
  })
})
