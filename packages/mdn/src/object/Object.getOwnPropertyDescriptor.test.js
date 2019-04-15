// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

describe('Object', () => {
  test('getOwnPropertyDescriptor()', () => {
    const object1 = {
      property1: 42,
    }

    const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1')

    expect(descriptor1.configurable).toEqual(true)
    expect(descriptor1.value).toEqual(42)
  })
})
