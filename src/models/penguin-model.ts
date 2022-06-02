import { Bird } from './bird-model'

export class Penguin extends Bird {
  fly (): any {
    return new Error('I can\'t fly')
  }

  walk (): string {
    return 'I can Walk'
  }

  swim (): string {
    return 'I can Swim'
  }
}
