import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('class foodModel', () => {
    const foodModel = new FoodModel('Meat', 'This is cow meat', 50)

    expect(foodModel.getName()).toEqual('Meat')
    expect(foodModel.getDescription()).toEqual('This is cow meat')
    expect(foodModel.getPrice()).toBe(50)
  })
})
