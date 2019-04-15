// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString

describe('Array', () => {
  test('toLocaleString()', () => {
    var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
    var localeString = array1.toLocaleString('en', { timeZone: 'UTC' })

    expect(localeString).toEqual('1,a,12/21/1997, 2:12:00 PM')
  })
})
