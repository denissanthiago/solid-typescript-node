import { UserCreatorUseCase } from '@application/useCases/UserCreator'
import { UserDeleterUseCase } from '@application/useCases/UserDeleter'
import { UserGetterUseCase } from '@application/useCases/UserGetter'
import { UserUpdaterUseCase } from '@application/useCases/UserUpdater'
import { type User } from '@domain/entities/User'
import { InMemoryUserRepository } from '@infrastructure/implementations/InMemoryUserRepository'

(async () => {
  const inMemoryUserRepository = new InMemoryUserRepository()

  // created user
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepository)
  const userToCreate: User = {
    name: 'Denis',
    age: 12,
    username: 'denis@pablo',
    id: '12'
  }
  await userCreatorUseCase.run(userToCreate)

  const userToCreate2: User = {
    name: 'Denis 2',
    age: 13,
    username: 'denis@pablo2',
    id: '13'
  }
  await userCreatorUseCase.run(userToCreate2)

  // updated user

  const userUpdaterUseCase = new UserUpdaterUseCase(inMemoryUserRepository)
  const userUpdated: User = {
    name: 'Denis 2.1',
    age: 13,
    username: 'denis@pablo2',
    id: '13'
  }
  await userUpdaterUseCase.run(userUpdated)

  // delete user

  const userDeleterUseCase = new UserDeleterUseCase(inMemoryUserRepository)
  await userDeleterUseCase.run('13')

  // get users
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepository)
  const users = await userGetterUseCase.run()
  console.log(users)
})()
