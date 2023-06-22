import { type User } from '@domain/entities/User'
import { type UserRepository } from '@domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private usersData: User[] = []

  async getAll (): Promise<User[]> {
    return this.usersData
  }

  async save (user: User): Promise<User> {
    this.usersData.push(user)
    return user
  }

  async getByUserName (username: string): Promise<User | null> {
    const userFound = this.usersData.find((user: User) => user.username === username)
    if (userFound === undefined) return null
    return userFound
  }

  async update (userToUpdate: User): Promise<User> {
    const users = this.usersData.filter(user => user.id !== userToUpdate.id)
    users.push(userToUpdate)
    this.usersData = users
    return userToUpdate
  }

  async delete (userToDelete: User): Promise<void> {
    const users = this.usersData.filter(user => user.id !== userToDelete.id)
    this.usersData = users
  }

  async getById (id: string): Promise<User | null> {
    const userFound = this.usersData.find((user: User) => user.id === id)

    if (userFound === undefined) return null
    return userFound
  }
}
