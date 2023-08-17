import * as AWS from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

const queryTable = async (query) => {

  const TimestreamQuery = new AWS.TimestreamQuery({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-west-1',
  },);

  const params = {
    QueryString: query,
  };

  try {
    const result = await TimestreamQuery.query(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(`Error querying Timestream: ${error}`);
  }

};

queryTable('SELECT * FROM DopYourDopDB.DrinkHistory');
