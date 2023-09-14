import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: Game) {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }
  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  if(result.rowCount === 0){
    return false
  } else {
    return true
  }
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;