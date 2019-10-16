// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

describe('Array', () => {
  test('push()', () => {
    const animals = ['pigs', 'goats', 'sheep']

    expect(animals.push('cows')).toEqual(4)
    expect(animals).toEqual(['pigs', 'goats', 'sheep', 'cows'])
    expect(animals.push('chickens')).toEqual(5)
    expect(animals).toEqual(['pigs', 'goats', 'sheep', 'cows', 'chickens'])
  })
})
