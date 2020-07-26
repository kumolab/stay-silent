// api entrance

// installed packages
import express, { request } from 'express';
import {Request, Response, NextFunction} from 'express'
import compression from 'compression';

// local models
import pre_logger from "./models/logger"
import { USE_OTHER_SETTING, USE_DB_NAME, SERVER_ENV_NAME, SERVER_HOST, SERVER_PORT } from "./utils/config"

// config & settings



const app: express.Application = express();

app.use(compression());
app.use(express.json());

app.use(pre_logger);

app.use((req: Request, res: Response, next: NextFunction) => {
    
    next();

})


app.get('/', (req, res) => {
    // console.log(req);
    res.send(`hello, user! ${USE_OTHER_SETTING}, db: ${USE_DB_NAME}`);
})

app.post('/data', (req, res) => {
    res.send('post data');
})


app.listen(SERVER_PORT, () => {
    console.log(`env: ${SERVER_ENV_NAME} listening on ${SERVER_HOST}:${SERVER_PORT}`);
})
