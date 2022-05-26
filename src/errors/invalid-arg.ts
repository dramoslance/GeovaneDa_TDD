export class InvalidArgument extends Error {
  constructor (arg: string) {
    super(`Error in the argument: ${arg}`)
  }
}
