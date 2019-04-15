// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

describe('Array', () => {
  test('indexOf()', () => {
    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

    expect(beasts.indexOf('bison')).toEqual(1)
    expect(beasts.indexOf('bison', 2)).toEqual(4)
    expect(beasts.indexOf('giraffe')).toEqual(-1)
  })
})
