// logger

import { RequestHandler, Request, Response, NextFunction } from 'express'

const pre_logger: RequestHandler= (req: Request, res: Response, next: NextFunction) => {
    console.log(`now: Req:${req.body}`);
    // tbd: write to file
    //
    next();
}

export default pre_logger;

