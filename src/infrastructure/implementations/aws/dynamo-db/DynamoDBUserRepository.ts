import { type User } from '@domain/entities/User'
import { type UserRepository } from '@domain/repositories/UserRepository'
import { DynamoDB } from '@infrastructure/driven-adapters/aws/dynamo-db'
export class DynamoDBUserRepository implements UserRepository {
  private readonly _db = DynamoDB.getInstance()

  async getAll (): Promise<User[]> {

  }

  async save (user: User): Promise<User> {

  }

  async getByUserName (username: string): Promise<User | null> {

  }

  async update (userToUpdate: User): Promise<User> {

  }

  async delete (userToDelete: User): Promise<void> {

  }

  async getById (id: string): Promise<User | null> {

  }
}
