import express, { Application, Request, Response } from 'express'
import userRouter from './src/controllers/user'
import { DBController } from './src/controllers/DBController'

const databaseController = new DBController();

const app: Application = express()

const port: number = 8080

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.get('/getDrinks', async (req: Request, res: Response) => {
    const response = await databaseController.executeQuery('SELECT * FROM DopYourDopDB.DrinkHistory');
    res.send(response);
});

app.get('/postDrink', async (req: Request, res: Response) => {

    const dummyData = [{
        'Dimensions': [
          {'Name': 'drink', 'Value': 'beer'},
          {'Name': 'username', 'Value': 'test_user'},
        ],
        'MeasureName': 'quantitity',
        'MeasureValue': '1',
        'MeasureValueType': 'DOUBLE',
        'Time': Date.now().toString()
      }];

    const response = await databaseController.executeWrite(dummyData);
    res.send(response);
});

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

export const handler = app