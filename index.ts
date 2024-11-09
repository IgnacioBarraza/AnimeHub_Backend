import app from './src/app'
import { connectToMongo } from './src/config/mongoose'

connectToMongo()
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
  console.log(`http://localhost:${port}`)
  console.log('AnimeHub Backend 🚀')
})