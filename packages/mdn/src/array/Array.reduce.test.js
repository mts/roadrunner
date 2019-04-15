// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

describe('Array', () => {
  test('reduce()', () => {
    const array1 = [1, 2, 3, 4]
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    expect(array1.reduce(reducer)).toEqual(10)
    expect(array1.reduce(reducer, 5)).toEqual(15)
  })
})
