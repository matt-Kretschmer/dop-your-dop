import express, { Application, Request, Response } from 'express'
import userRouter from './src/controllers/user'

const app: Application = express()

const port: number = 8080

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

export const handler = app