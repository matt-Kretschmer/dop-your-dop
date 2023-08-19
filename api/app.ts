import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv';
import userRouter from './src/controllers/user'
import { DBController } from './src/controllers/DBController'
import cors from 'cors'

dotenv.config();

const databaseController = new DBController();

const app: Application = express()

const port: number = 8080

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.get('/getDrinks', async (req: Request, res: Response) => {
    const response = await databaseController.executeQuery(`SELECT * FROM ${process.env.DATABASE_NAME}.${process.env.TABLE_NAME}`);
    res.send(response);
});

app.post('/postDrink', async (req: Request, res: Response) => {

    const data = {
        username: req?.body?.username,
        drink: req?.body?.drink,
        quantity: parseFloat(req?.body?.quantity),
    };

    if (!data?.username || !data.drink || !req?.body?.quantity || isNaN(data?.quantity)) {
        res.status(400).send('Invalid query parameters.');
        return;
    }

    const response = await databaseController.executeWrite(
        data.username,
        data.drink,
        data.quantity
    );

    res.send(response);
});

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

export const handler = app