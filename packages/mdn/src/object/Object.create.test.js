// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

/* eslint-disable no-console */

describe('Object', () => {
  let consoleLogSpy

  beforeEach(() => {
    consoleLogSpy = jest.fn(() => {})
    jest.spyOn(console, 'log').mockImplementation(consoleLogSpy)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('create()', () => {
    const person = {
      isHuman: false,
      printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
      },
    }

    const me = Object.create(person)

    me.name = 'Matthew'
    me.isHuman = true

    me.printIntroduction()

    expect(consoleLogSpy).toHaveBeenCalledTimes(1)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'My name is Matthew. Am I human? true')
  })
})

/* eslint-enable no-console */
