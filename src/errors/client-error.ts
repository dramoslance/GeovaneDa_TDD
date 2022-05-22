export class MissingFormalParameter extends Error {
  constructor (name: string) {
    super(`Error in the Parameter: ${name}`)
  }
}
