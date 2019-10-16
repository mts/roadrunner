// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

describe('Array', () => {
  test('splice()', () => {
    const months = ['Jan', 'March', 'April', 'June']

    months.splice(1, 0, 'Feb')
    expect(months).toEqual(['Jan', 'Feb', 'March', 'April', 'June'])
    months.splice(4, 1, 'May')
    expect(months).toEqual(['Jan', 'Feb', 'March', 'April', 'May'])
  })
})
