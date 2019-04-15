// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

describe('Object', () => {
  test('preventExtensions()', () => {
    const object1 = {}

    Object.preventExtensions(object1)

    function objectDefineProperty() {
      Object.defineProperty(object1, 'property1', {
        value: 42,
      })
    }

    expect(objectDefineProperty).toThrow('Cannot define property property1, object is not extensible')
  })
})
