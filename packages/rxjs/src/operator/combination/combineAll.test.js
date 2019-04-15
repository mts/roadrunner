// https://www.learnrxjs.io/operators/combination/combineall.html

import { take, map, combineAll } from 'rxjs/operators'
import { interval } from 'rxjs'

describe('combination', () => {
  test('combineall()', done => {
    let results = []
    const expected = [
      ['Result (0): 0', 'Result (1): 0'],
      ['Result (0): 1', 'Result (1): 0'],
      ['Result (0): 1', 'Result (1): 1'],
      ['Result (0): 2', 'Result (1): 1'],
      ['Result (0): 2', 'Result (1): 2'],
      ['Result (0): 3', 'Result (1): 2'],
      ['Result (0): 3', 'Result (1): 3'],
      ['Result (0): 4', 'Result (1): 3'],
      ['Result (0): 4', 'Result (1): 4'],
    ]

    //emit every 1s, take 2
    const source = interval(1).pipe(take(2))
    //map each emitted value from source to interval observable that takes 5 values
    const example = source.pipe(
      map(val =>
        interval(1).pipe(
          map(i => `Result (${val}): ${i}`),
          take(5),
        ),
      ),
    )

    const combined = example.pipe(combineAll())

    combined.subscribe({
      next: val => results.push(val),
      complete: () => {
        expect(results).toEqual(expected)
        done()
      },
    })
  })
})
