import { Bird } from '../models/bird-model'
import { Eagle } from '../models/eagle-model'
import { Penguin } from '../models/penguin-model'

describe('Bird', () => {
  test('Shoud Fly', () => {
    const bird = new Bird({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(bird.fly()).toBe('Eagle')
  })
})

describe('Eagle', () => {
  test('Shoud Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toBe('Eagle')
  })
})

describe('Penguin', () => {
  test('Shouldn\'t Flight but cand Walk and Swim', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'North America'
    })

    expect(penguin.fly()).toEqual(new Error('I can\'t fly'))
    expect(penguin.walk()).toBe('I can Walk')
    expect(penguin.swim()).toBe('I can Swim')
  })
})
