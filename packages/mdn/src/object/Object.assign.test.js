// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

describe('Object', () => {
  test('assign()', () => {
    const target = { a: 1, b: 2 }
    const source = { b: 4, c: 5 }

    const returnedTarget = Object.assign(target, source)
    expect(target).toEqual({ a: 1, b: 4, c: 5 })
    expect(returnedTarget).toEqual({ a: 1, b: 4, c: 5 })
  })
})
