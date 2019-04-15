// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator

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

  test('@@iterator()', () => {
    var arr = ['a', 'b', 'c', 'd', 'e']
    var eArr = arr[Symbol.iterator]()

    for (let letter of eArr) {
      console.log(letter)
    }

    expect(consoleLogSpy).toHaveBeenCalledTimes(5)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'a')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'b')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'c')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'd')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'e')
  })
})

/* eslint-enable no-console */
