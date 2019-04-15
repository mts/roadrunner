// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

describe('Array', () => {
  test('flatMap()', () => {
    let arr1 = [1, 2, 3, 4]
    arr1.map(x => [x * 2])
    expect(arr1.map(x => [x * 2])).toEqual([[2], [4], [6], [8]])
    expect(arr1.flatMap(x => [x * 2])).toEqual([2, 4, 6, 8])
    expect(arr1.flatMap(x => [[x * 2]])).toEqual([[2], [4], [6], [8]])

    let arr2 = ["it's Sunny in", '', 'California']
    expect(arr2.map(x => x.split(' '))).toEqual([["it's", 'Sunny', 'in'], [''], ['California']])
    expect(arr2.flatMap(x => x.split(' '))).toEqual(["it's", 'Sunny', 'in', '', 'California'])
  })
})
