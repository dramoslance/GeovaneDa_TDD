import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'

describe('Register Vehicle', () => {
  test('if the name does not exist return 400', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        model: 'DXT',
        year: 2020,
        color: 'color'
        // name: 'Nissan'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('if the model does not exist return 400', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        year: 2020,
        color: 'color'
        // model: 'DXT',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('if the year does not exists return 400', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        color: 'color'
        // year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('year'))
  })

  test('if the color does not exist return 400', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'color'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('color'))
  })
})
