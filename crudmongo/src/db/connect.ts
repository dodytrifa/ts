import mongoose from 'mongoose';
import config from 'config';
import log from "../logger"

function connect() {
  const dbUri = config.get("dbUri") as string;

  return mongoose
  // .connect(dbUri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // })
  .connect('mongodb://localhost/test')
  .then(() => {
    log.info("database connected")
  })
  .catch((error)=>{
    log.error("db error", error)
    process.exit(1)
  })
}

export default connect

