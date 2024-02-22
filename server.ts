import express, { Express, Request, Response} from 'express'
const port = 8080

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')  
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
})