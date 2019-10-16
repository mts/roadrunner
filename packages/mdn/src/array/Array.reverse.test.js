// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

describe('Array', () => {
  test('reverse()', () => {
    const array1 = ['one', 'two', 'three']

    const reversed = array1.reverse()

    expect(reversed).toEqual(['three', 'two', 'one'])
    expect(array1).toEqual(['three', 'two', 'one'])
  })
})
