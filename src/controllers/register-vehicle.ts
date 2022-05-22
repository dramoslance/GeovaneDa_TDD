import { HttpResponse, HttpRequest } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): (HttpResponse) {
    const { name, model } = httpRequest.body

    if (name === undefined || name === '') {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    if (model === undefined || model === '') {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }

    return { body: { ok: true }, statusCode: 200 }
  }
}
