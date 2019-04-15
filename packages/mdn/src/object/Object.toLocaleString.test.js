// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString

describe('Object', () => {
  test('toLocaleString()', () => {
    const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
    expect(date1.toLocaleString('ar-EG')).toEqual('12/20/2012, 4:00:00 AM')

    // const number1 = 123456.789
    // expect(number1.toLocaleString('de-DE')).toEqual(123,456.789)
  })
})
