// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

describe('Object', () => {
  test('getPrototypeOf()', () => {
    const prototype1 = {}
    const object1 = Object.create(prototype1)

    expect(Object.getPrototypeOf(object1)).toBe(prototype1)
  })
})
