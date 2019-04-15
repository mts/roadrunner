// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

describe('Array', () => {
  test('reduceRight()', () => {
    const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))

    expect(array1).toEqual([4, 5, 2, 3, 0, 1])
  })
})
