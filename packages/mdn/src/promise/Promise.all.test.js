// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

describe('Promise', () => {
  test('all()', () => {
    function getPromise1() {
      return Promise.resolve(3)
    }

    function getPromise2() {
      return 42
    }

    function getPromise3() {
      return new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'foo')
      })
    }

    function getAllPromises() {
      return Promise.all([getPromise1(), getPromise2(), getPromise3()])
    }

    return expect(getAllPromises()).resolves.toEqual([3, 42, 'foo'])
  })
})
