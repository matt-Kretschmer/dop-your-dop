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

    const username = 'test_user';
    const drink = 'beer';
    const quantity = 1.5;

    const response = await databaseController.executeWrite(
        username,
        drink,
        quantity
    );

    res.send(response);
});

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

export const handler = app