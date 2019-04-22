// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

describe('Promise', () => {
  test('resolve()', () => {
    function resolve123() {
      return Promise.resolve(123)
    }

    return expect(resolve123()).resolves.toBe(123)
  })
})
