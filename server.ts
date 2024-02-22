import express, { Express, Request, Response} from 'express'

import 'dotenv/config'

const port = 8080

const app: Express = express()

const seasonIDs = {
  ucl: 21638, // UEFA Champions League
  mls: 22974 // Major League Soccer
}

const seasonsBaseUrl: string = 'https://api.sportmonks.com/v3/football/seasons'

app.get('/:league', async (req: Request, res: Response) => {
  const { league } = req.params
  
  const response = await fetch(`${seasonsBaseUrl}/${seasonIDs[league]}?api_token=${process.env.API_TOKEN}&include=fixtures`)
  const data = await response.json()

  console.log(JSON.stringify(data, null , 2));

  res.send(data)  
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
})