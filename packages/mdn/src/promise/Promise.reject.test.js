// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject

/* eslint-disable no-console */

describe('Promise', () => {
  test('reject()', () => {
    function reject123() {
      return Promise.reject('123')
    }

    return expect(reject123()).rejects.toMatch('123')
  })
})
