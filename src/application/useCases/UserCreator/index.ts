import { ExistUserByUserName } from '@domain/services/ExistUserByUserName'
import { UserAlreadyExistException } from '@domain/exceptions/UserAlreadyExistsException'

import type { User } from '@domain/entities/User'
import type { UserRepository } from '@domain/repositories/UserRepository'

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByUserName: ExistUserByUserName

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._existUserByUserName = new ExistUserByUserName(userRepository)
  }

  async run (body: User): Promise<User> {
    const existUser: boolean = await this._existUserByUserName.run(body.username)
    if (existUser) throw new UserAlreadyExistException()
    const userCreated: User = await this._userRepository.save(body)
    return userCreated
  }
}
