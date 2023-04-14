import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './core/config'
import axios from 'axios'
import { z } from 'zod'

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})

app.get('/api/v1/heartbeat', (req: express.Request, res: express.Response) => {
  res.status(200).send({
    server: 'ok',
    config,
  })
})

app.post('/api/v1/users', async (req: express.Request, res: express.Response) => {
  try {
    const usersPostBody = z.object({
      username: z.string(),
    })

    const { username } = usersPostBody.parse(req.body)

    const response = await axios.put('https://api.chatengine.io/users/',
      {
        username,
        secret: username,
        first_name: username
      },
      {
        headers: { "private-key": config.chatEnginePrivateKey }
      }
    )

    return res.status(201).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  };
})
