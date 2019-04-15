// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

describe('Object', () => {
  test('getOwnPropertyNames()', () => {
    const object1 = {
      a: 1,
      b: 2,
      c: 3,
    }

    expect(Object.getOwnPropertyNames(object1)).toEqual(['a', 'b', 'c'])
  })
})
