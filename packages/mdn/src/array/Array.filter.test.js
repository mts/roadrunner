// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

describe('Array', () => {
  test('filter()', () => {
    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

    const result = words.filter(word => word.length > 6)

    expect(result).toEqual(['exuberant', 'destruction', 'present'])
  })
})
