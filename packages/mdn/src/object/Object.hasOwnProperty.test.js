// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
/* eslint-disable no-prototype-builtins */

describe('Object', () => {
  test('hasOwnProperty()', () => {
    const object1 = new Object()
    object1.property1 = 42

    expect(object1.hasOwnProperty('property1')).toEqual(true)
    expect(object1.hasOwnProperty('toString')).toEqual(false)
    expect(object1.hasOwnProperty('hasOwnProperty')).toEqual(false)
  })
})
/* eslint-enable no-prototype-builtins */
