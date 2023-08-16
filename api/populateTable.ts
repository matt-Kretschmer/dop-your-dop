import * as AWS from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

async function writeRecords() {
  console.log("Writing records");
  const currentTime = Date.now().toString(); // Unix time in milliseconds


  const writeClient = new AWS.TimestreamWrite({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-west-1',
  },);

  const request = writeClient.writeRecords({
    DatabaseName: 'DopYourDopDB',
    TableName: 'DrinkHistory',
    Records: [{
      'Dimensions': [
        {'Name': 'drink', 'Value': 'beer'},
        {'Name': 'username', 'Value': 'test_user'},
      ],
      'MeasureName': 'quantitity',
      'MeasureValue': '3.5',
      'MeasureValueType': 'DOUBLE',
      'Time': currentTime.toString()
    }]
  });

  await request.promise().then(
    (data) => {
      console.log("Write records successful");
      console.log(data);
    },
    (err) => {
      console.log("Error writing records:", err);
      if (err.code === 'RejectedRecordsException') {
        const responsePayload = JSON.parse(request.httpRequest.body.toString());
        console.log("RejectedRecords: ", responsePayload.RejectedRecords);
        console.log("Other records were written successfully. ");
      }
    }
  );
}
writeRecords();
