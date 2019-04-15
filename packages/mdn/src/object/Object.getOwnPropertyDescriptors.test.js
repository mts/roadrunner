// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

describe('Object', () => {
  test('getOwnPropertyDescriptors()', () => {
    const object1 = {
      property1: 42,
    }

    const descriptors1 = Object.getOwnPropertyDescriptors(object1)

    expect(descriptors1.property1.writable).toEqual(true)
    expect(descriptors1.property1.value).toEqual(42)
  })
})
