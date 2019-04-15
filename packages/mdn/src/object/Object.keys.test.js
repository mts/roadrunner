// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

describe('Object', () => {
  test('keys()', () => {
    const object1 = {
      a: 'somestring',
      b: 42,
      c: false,
    }

    expect(Object.keys(object1)).toEqual(['a', 'b', 'c'])
  })
})
