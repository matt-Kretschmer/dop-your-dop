import {
  AWSError,
  TimestreamQuery,
  TimestreamWrite,
} from 'aws-sdk';

import {
  QueryResponse,
} from 'aws-sdk/clients/timestreamquery';

import {
  WriteRecordsResponse,
} from 'aws-sdk/clients/timestreamwrite';

import {
  PromiseResult,
} from 'aws-sdk/lib/request';

import * as dotenv from 'dotenv';

const parseResponse = (response: PromiseResult<QueryResponse, AWSError>) => {

  //TODO: parse data from response

  return response;
};

export class DBController {

  readonly dbName: string;
  readonly tableName: string;
  readonly region: string;
  readonly accessKeyId: string;
  readonly secretAccessKey: string;

  readonly writeClient: TimestreamWrite;
  readonly queryClient: TimestreamQuery;

  constructor() {

    dotenv.config();

    this.dbName = process.env.DATABASE_NAME ?? '';
    this.tableName = process.env.TABLE_NAME ?? '';
    this.region = process.env.AWS_REGION ?? '';
    this.accessKeyId = process.env.AWS_ACCESS_KEY_ID ?? '';
    this.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY ?? '';

    const aws_config = {
      accessKeyId: this.accessKeyId,
      secretAccessKey: this.secretAccessKey,
      region: this.region,
    };

    this.writeClient = new TimestreamWrite(aws_config);
    this.queryClient = new TimestreamQuery(aws_config);
  };

  async executeQuery(query: string): Promise<PromiseResult<QueryResponse, AWSError>> {

    try {

      const params = {
        QueryString: query,
      };

      const response = await this.queryClient
        .query(params)
        .promise();

      return parseResponse(response);

    } catch (error) {
      throw new Error(`Error querying database: ${error}`);
    }
  };

  //TODO: use more specific type for records
  async executeWrite(records: object[]): Promise<PromiseResult<WriteRecordsResponse, AWSError>> {

    try {

      const params = {
        DatabaseName: this.dbName,
        TableName: this.tableName,
        Records: records
      };

      const response = await this.writeClient
        .writeRecords(params)
        .promise();

      return response;//TODO: examine response to check for success?

    } catch (error) {
      throw new Error(`Error writing to database: ${error}`);
    }
  };

}