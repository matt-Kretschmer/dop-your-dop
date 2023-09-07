import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv';
import userRouter from './src/controllers/user'
import { DBController } from './src/controllers/DBController'
import cors from 'cors'
import { generateData } from './src/dummy_data/batchDataGeneration';

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
    const query = `SELECT * FROM ${process.env.DATABASE_NAME}.${process.env.TABLE_NAME}`;
    const response = await databaseController.executeQuery(query);
    res.send(response);
});

//TODO: add validation
app.get('/getUsersDrinks', async (req: Request, res: Response) => {
    const username = req?.body?.username;

    const query = `SELECT * FROM ${process.env.DATABASE_NAME}.${process.env.TABLE_NAME} WHERE username = '${username}'`;
    const response = await databaseController.executeQuery(query);
    res.send(response);
});

//TODO: add validation
app.get('/getTimedDrinks', async (req: Request, res: Response) => {
    const time = req?.body?.time;//7d, 24h, 15m, etc

    const query = `SELECT * FROM ${process.env.DATABASE_NAME}.${process.env.TABLE_NAME} WHERE time between ago(${time}) and now()`;
    const response = await databaseController.executeQuery(query);
    res.send(response);
});

//TODO: add validation
app.get('/getUsersTimedDrinks', async (req: Request, res: Response) => {
    const username = req?.body?.username;
    const time = req?.body?.time;//7d, 24h, 15m, etc

    const query = `SELECT * FROM ${process.env.DATABASE_NAME}.${process.env.TABLE_NAME} WHERE username = '${username}' AND time between ago(${time}) and now()`;
    const response = await databaseController.executeQuery(query);
    res.send(response);
});

app.post('/postDrink', async (req: Request, res: Response) => {

    const data = {
        username: req?.body?.username,
        drink: req?.body?.drink,
        quantity: parseFloat(req?.body?.quantity),
        time: req?.body?.time
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

app.get('/postDummyData', async (req: Request, res: Response) => {
    const data = await generateData();

    const response = await databaseController.executeBatchWrite(data);

    res.send(response);
});

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

export const handler = app