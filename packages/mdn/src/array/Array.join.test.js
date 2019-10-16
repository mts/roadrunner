// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

describe('Array', () => {
  test('join()', () => {
    const elements = ['Fire', 'Wind', 'Rain']

    expect(elements.join()).toEqual('Fire,Wind,Rain')
    expect(elements.join('')).toEqual('FireWindRain')
    expect(elements.join('-')).toEqual('Fire-Wind-Rain')
  })
})
