import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 25
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(25)
  })

  it('Vehicle Helper', () => {
    const vehicleHelper = new VehicleHelper()

    expect(vehicleHelper).toEqual(vehicleHelper)
  })
})
