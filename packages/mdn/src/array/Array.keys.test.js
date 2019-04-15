// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

/* eslint-disable no-console */

describe('Array', () => {
  let consoleLogSpy

  beforeEach(() => {
    consoleLogSpy = jest.fn(() => {})
    jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('keys()', () => {
    var array1 = ['a', 'b', 'c']
    var iterator = array1.keys()

    for (let key of iterator) {
      console.log(key)
    }

    expect(consoleLogSpy).toHaveBeenCalledTimes(3)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 0)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 1)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 2)
  })
})

/* eslint-enable no-console */
