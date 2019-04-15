// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

describe('Object', () => {
  let object1

  beforeEach(() => {
    object1 = {}

    Object.defineProperty(object1, 'property1', {
      value: 42,
      writable: false,
    })
  })

  test('defineProperty()', () => {
    function assignObjectProperty() {
      object1.property1 = 77
    }

    expect(object1.property1).toEqual(42)
    expect(assignObjectProperty).toThrow("Cannot assign to read only property 'property1' of object '#<Object>'")
  })
})
