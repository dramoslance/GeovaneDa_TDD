export class RegisterVehicle {
  handle (httpRequest: any): any {
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
  }
}
