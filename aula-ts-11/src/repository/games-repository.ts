import { Game } from "../protocols/game-protocol";
import {db} from "../databaseconnection/database.connection.ts" 


async function getGames() {
 const games =  await db.query<Game>("select * from games")
  return games.rows;
}

async function createGame(game: Game) {
  await db.query<Game>("INSERT INTO games(title,platform) values($1,$2)",[game.title,game.platform])
}

async function getGameByTitleAndPlatform(game: Game) {
  const games =  (await db.query<Game>("select * from games where title = $1 and platform = $2",[game.title,game.platform]))
  return games
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;