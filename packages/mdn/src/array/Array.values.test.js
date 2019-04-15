// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

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

  test('values()', () => {
    const array1 = ['a', 'b', 'c']
    const iterator = array1.values()

    for (const value of iterator) {
      console.log(value) // expected output: "a" "b" "c"
    }

    expect(consoleLogSpy).toHaveBeenCalledTimes(3)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'a')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'b')
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'c')
  })
})

/* eslint-enable no-console */
