// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

describe('Array', () => {
  test('lastIndexOf()', () => {
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

    expect(animals.lastIndexOf('Dodo')).toEqual(3)
    expect(animals.lastIndexOf('Tiger')).toEqual(1)
  })
})
