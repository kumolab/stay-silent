// api entrance

import express, { request } from 'express';
import {Request, Response, NextFunction} from 'express'
import compression from 'compression';

import pre_logger from "./models/logger"


const app: express.Application = express();

app.use(compression());
app.use(express.json());

app.use(pre_logger);

app.use((req: Request, res: Response, next: NextFunction) => {
    
    next()

})


app.get('/', (req, res) => {
    // console.log(req);
    res.send('hello, user!');
})

app.post('/data', (req, res) => {
    res.send('post data')
})


app.listen(8009, () => {
    console.log('listening on http://localhost:8009/')
})
