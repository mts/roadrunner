// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

describe('Array', () => {
  test('pop()', () => {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

    expect(plants.pop()).toEqual('tomato')
    expect(plants).toEqual(['broccoli', 'cauliflower', 'cabbage', 'kale'])
    expect(plants.pop()).toEqual('kale')
    expect(plants).toEqual(['broccoli', 'cauliflower', 'cabbage'])
  })
})
