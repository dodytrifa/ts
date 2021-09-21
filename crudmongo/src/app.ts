// console.log("Halo");

import express from 'express';
import config from 'config';

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json())
//* karena versi express baru, shg tidak perlu install body parser
//* app use sbg middleware

app.use(express.urlencoded({extended: false}))

app.listen(port, host, () => {
  console.log(`server start at http://${host}:${port}`);
  
})
