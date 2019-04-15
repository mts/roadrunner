// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

describe('Object', () => {
  test('entries()', () => {
    const object1 = { foo: 'bar', baz: 42 }
    const object2 = { 0: 'a', 1: 'b', 2: 'c' }
    const result = Object.entries(object2).sort((a, b) => a - b)

    expect(Object.entries(object1)[1]).toEqual(['baz', 42])
    expect(Object.entries(object2)[2]).toEqual(['2', 'c'])
    expect(Object.entries(result)[1]).toEqual(['1', ['1', 'b']])
  })
})
