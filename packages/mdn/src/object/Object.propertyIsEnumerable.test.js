// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable

describe('Object', () => {
  test('propertyIsEnumerable()', () => {
    const object1 = {}
    const array1 = []
    object1.property1 = 42
    array1[0] = 42

    expect(object1.propertyIsEnumerable('property1')).toEqual(true)
    expect(array1.propertyIsEnumerable(0)).toEqual(true)
    expect(array1.propertyIsEnumerable('length')).toEqual(false)
  })
})
