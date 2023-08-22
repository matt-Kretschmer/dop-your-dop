import {
  AWSError,
  TimestreamQuery,
  TimestreamWrite,
} from 'aws-sdk';

import {
  QueryResponse,
} from 'aws-sdk/clients/timestreamquery';

import {
  Records,
  WriteRecordsResponse,
} from 'aws-sdk/clients/timestreamwrite';

import {
  PromiseResult,
} from 'aws-sdk/lib/request';

import * as dotenv from 'dotenv';

 //TODO: use better return type
const parseResponse = (response: PromiseResult<QueryResponse, AWSError>): object[] => {

  const Indices = {
    usernameIndex: -1,
    drinkIndex: -1,
    quantityIndex: -1,
    timeIndex: -1,
  };

  //TODO: remove once data consistent (use predefined indices)
  for (const columnIndex in response.ColumnInfo) {
    switch (response.ColumnInfo[columnIndex].Name) {
      case 'username':
        Indices.usernameIndex = parseInt(columnIndex);
        break;
      case 'drink':
        Indices.drinkIndex = parseInt(columnIndex);
        break;
      case 'measure_value::double':
        Indices.quantityIndex = parseInt(columnIndex);
        break;
      case 'time':
        Indices.timeIndex = parseInt(columnIndex);
        break;
    }
  }

  const data = [];

  for (const record of response.Rows) {
    data.push({
      username: record.Data[Indices.usernameIndex].ScalarValue,
      drink: record.Data[Indices.drinkIndex].ScalarValue,
      quantity: record.Data[Indices.quantityIndex].ScalarValue,
      time: record.Data[Indices.timeIndex].ScalarValue,
    });
  }

  return data;
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

  async executeQuery(query: string): Promise<object[]> {

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

  async executeWrite(username: string, drink: string, quantity: number, time: string = Date.now().toString()): Promise<PromiseResult<WriteRecordsResponse, AWSError>> {

    try {

      const params = {
        DatabaseName: this.dbName,
        TableName: this.tableName,
        Records: [{
          'Dimensions': [
            {'Name': 'drink', 'Value': drink},
            {'Name': 'username', 'Value': username},
          ],
          'MeasureName': 'quantity',
          'MeasureValue': `${quantity}`,
          'MeasureValueType': 'DOUBLE',
          'Time': time
        }]
      };

      const response = await this.writeClient
        .writeRecords(params)
        .promise();

      return response;//TODO: examine response to check for success?

    } catch (error) {
      throw new Error(`Error writing to database: ${error}`);
    }
  };

  async executeBatchWrite(data: Records): Promise<PromiseResult<WriteRecordsResponse, AWSError>> {

    try {

      const params = {
        DatabaseName: this.dbName,
        TableName: this.tableName,
        Records: data
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