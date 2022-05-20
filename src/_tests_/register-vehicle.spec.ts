import { RegisterVehicle } from '../controllers/register-vehicle'

describe('Register Vehicle', () => {
  test('if the name does not exist return 400', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: name'))
  })

  test('if the model does not exist return 400', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: model'))
  })
})
