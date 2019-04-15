describe('Array', () => {
  test('from()', () => {
    expect(Array.from('foo')).toEqual(['f', 'o', 'o'])
    expect(Array.from([1, 2, 3], x => x + x)).toEqual([2, 4, 6])
  })
})
