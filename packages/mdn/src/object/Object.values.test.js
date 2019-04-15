// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

describe('Object', () => {
  test('values()', () => {
    const object1 = {
      a: 'somestring',
      b: 42,
      c: false,
    }

    expect(Object.values(object1)).toEqual(['somestring', 42, false])
  })
})
