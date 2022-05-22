import { HttpResponse, HttpRequest } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): (HttpResponse) {
    const requiredProperties = ['name', 'model', 'year', 'color']

    for (const prop of requiredProperties) {
      if (httpRequest.body[prop] === undefined || httpRequest.body[prop] === '') {
        return {
          statusCode: 400,
          body: new Error(`Error in the Parameter: ${prop}`)
        }
      }
    }

    return { body: { ok: true }, statusCode: 200 }
  }
}
