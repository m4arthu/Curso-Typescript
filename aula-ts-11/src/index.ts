import express, { NextFunction, Request, Response, json } from "express";
import { Game } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";
import "express-async-errors"
const app = express();
app.use(json());
app.post("/games", async (req: Request, res: Response) => {
  const body = req.body as Game;
   await gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
});

app.get("/games",  async (req: Request, res: Response) => {
  const games = await gamesService.getGames();
  res.send(games);
});

app.use(async (err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).send(err.message);
})

app.listen(5000, () => console.log(`Server is up and running or port 5000`));