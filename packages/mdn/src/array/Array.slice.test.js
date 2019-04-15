// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

describe('Array', () => {
  test('slice()', () => {
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    expect(animals.slice(2)).toEqual(['camel', 'duck', 'elephant'])
    expect(animals.slice(2, 4)).toEqual(['camel', 'duck'])
    expect(animals.slice(1, 5)).toEqual(['bison', 'camel', 'duck', 'elephant'])
  })
})
