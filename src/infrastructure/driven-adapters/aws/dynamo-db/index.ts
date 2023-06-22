import AWS from '@infrastructure/driven-adapters/aws'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class DynamoDB {
  static TABLE_NAME: string = 'user'
  private static _INSTANCE: AWS.DynamoDB

  static getInstance (options?: AWS.DynamoDB.ClientConfiguration): AWS.DynamoDB {
    if (this._INSTANCE === undefined) this._INSTANCE = new AWS.DynamoDB(options)

    return this._INSTANCE
  }
}
