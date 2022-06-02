import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public ibird: IBird) {
    Object.assign(this, ibird)
  }

  fly (): string {
    return this.ibird.name
  }
}
