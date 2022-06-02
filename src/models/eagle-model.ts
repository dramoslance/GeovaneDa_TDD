import { Bird } from './bird-model'

export class Eagle extends Bird {
  fly (): string {
    return this.ibird.name
  }
}
