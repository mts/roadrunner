// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/* eslint-disable no-console */

describe('Array', () => {
  let consoleLogSpy

  beforeEach(() => {
    consoleLogSpy = jest.fn(() => {})
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('forEach()', () => {
    var array1 = ['a', 'b', 'c']

    jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)

    array1.forEach(function(element) {
      console.log(element)
    })

    expect(consoleLogSpy).toHaveBeenCalledTimes(3)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'a')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'b')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'c')
  })
})

/* eslint-enable no-console */
