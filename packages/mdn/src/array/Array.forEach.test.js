// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

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

  test('forEach()', () => {
    const array1 = ['a', 'b', 'c']

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
