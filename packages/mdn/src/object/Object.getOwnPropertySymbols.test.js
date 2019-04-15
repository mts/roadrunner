// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

describe('Object', () => {
  test('getOwnPropertySymbols()', () => {
    const object1 = {}
    const a = Symbol('a')
    const b = Symbol.for('b')

    object1[a] = 'localSymbol'
    object1[b] = 'globalSymbol'

    const objectSymbols = Object.getOwnPropertySymbols(object1)

    expect(objectSymbols.length).toEqual(2)
  })
})
