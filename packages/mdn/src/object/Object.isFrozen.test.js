// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen

describe('Object', () => {
  test('isFrozen()', () => {
    const object1 = {
      property1: 42,
    }

    expect(Object.isFrozen(object1)).toEqual(false)

    Object.freeze(object1)

    expect(Object.isFrozen(object1)).toEqual(true)
  })
})
