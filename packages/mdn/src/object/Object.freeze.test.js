// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

describe('Object', () => {
  test('freeze()', () => {
    const object1 = {
      property1: 42,
    }

    const object2 = Object.freeze(object1)

    function assignObjectProperty() {
      object2.property1 = 33
    }

    expect(assignObjectProperty).toThrow("Cannot assign to read only property 'property1' of object '#<Object>'")
    expect(object2.property1).toEqual(42)
  })
})
