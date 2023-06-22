export class UserNotFoundException extends Error {
  constructor () {
    super('User not fount')
  }
}
