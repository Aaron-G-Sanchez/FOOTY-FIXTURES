import express, { Express, Request, Response} from 'express'

import 'dotenv/config'

const port = 8080

const app: Express = express()

const seasonIDs = {
  champsLeague: 21638,
  mls: 22974
}

const seasonsBaseUrl: string = 'https://api.sportmonks.com/v3/football/seasons/21638'

app.get('/', async (req: Request, res: Response) => {
  const response = await fetch(`${seasonsBaseUrl}?api_token=${process.env.API_TOKEN}&include=fixtures`)
  const data = await response.json()
  console.log(JSON.stringify(data, null , 2));

  res.send(data)  
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
})