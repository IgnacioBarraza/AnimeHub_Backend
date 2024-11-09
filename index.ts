import app from './src/app'
import { validateEnv } from './src/config/env.config'
import { connectToMongo } from './src/config/mongoose'

connectToMongo()
const port = validateEnv()?.port || 5000

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
  console.log(`http://localhost:${port}`)
  console.log('AnimeHub Backend 🚀')
})