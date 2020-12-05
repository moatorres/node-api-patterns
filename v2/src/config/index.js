const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  porta: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  mongoPass: process.env.MONGO_PASS,
}
