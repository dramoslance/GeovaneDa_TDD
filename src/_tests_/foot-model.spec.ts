import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('class foodModel', () => {
    const foodModel = new FoodModel({
      name: 'Meat',
      description: 'This is cow meat',
      price: 50,
      inventory: 50
    })

    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('Meat')
    expect(foodModel.getDescription()).toEqual('This is cow meat')
    expect(foodModel.getPrice()).toBe(50)
    expect(foodModel.getInventory()).toBe(50)
  })
})
