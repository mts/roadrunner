// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

describe('Object', () => {
  test('is()', () => {
    var foo = { a: 1 }
    var bar = { a: 1 }

    expect(Object.is('foo', 'foo')).toEqual(true)
    expect(Object.is(window, window)).toEqual(true)
    expect(Object.is('foo', 'bar')).toEqual(false)
    expect(Object.is([], [])).toEqual(false)

    expect(Object.is(foo, foo)).toEqual(true)
    expect(Object.is(foo, bar)).toEqual(false)

    expect(Object.is(null, null)).toEqual(true)

    expect(Object.is(0, -0)).toEqual(false)
    expect(Object.is(-0, -0)).toEqual(true)
    expect(Object.is(NaN, 0 / 0)).toEqual(true)
  })
})
