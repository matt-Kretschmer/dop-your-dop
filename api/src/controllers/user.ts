import express from 'express';

const userRouter = express.Router();

userRouter.get<{}, any>('/', (req, res) => {
  
    res.json({
    message: `will have our user's data`,
  });
});

userRouter.post<{}, any>('/drink', (req, res) => {

    res.json({
        message: `will post our user drink here`
    })
})

export default userRouter;