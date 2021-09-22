// console.log("Halo");

import express from 'express';
import config from 'config';
import log from "./logger"
import connect from './db/connect';
import routes from './routes';

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json())
//* karena versi express baru, shg tidak perlu install body parser
//* app use sbg middleware

app.use(express.urlencoded({extended: false}))

app.listen(port, host, () => {
  log.info(`server start at http://${host}:${port}`);
  
  connect()
  routes(app)
})
