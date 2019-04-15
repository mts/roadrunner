// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString

describe('Array', () => {
  test('toString()', () => {
    var array1 = [1, 2, 'a', '1a']

    expect(array1.toString()).toEqual('1,2,a,1a')
  })
})
