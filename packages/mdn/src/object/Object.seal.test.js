// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

describe('Object', () => {
  test('seal()', () => {
    const object1 = {
      property1: 42,
    }

    Object.seal(object1)
    object1.property1 = 33
    expect(object1.property1).toEqual(33)

    function deleteObjectProperty() {
      delete object1.property1
    }
    expect(deleteObjectProperty).toThrow("Cannot delete property 'property1' of #<Object>")
    expect(object1.property1).toEqual(33)
  })
})
