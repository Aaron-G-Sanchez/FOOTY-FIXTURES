import express, { Express, Request, Response} from 'express'
import 'dotenv/config'

const port = 8080

const app: Express = express()

const seasonIDs = {
  champsLeague: 21638,
  mls: 22974
}

let seasonsBaseUrl: string = 'https://api.sportmonks.com/v3/football/seasons/21638'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')  
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
})