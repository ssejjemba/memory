import { Card } from "../components/round-card/Card";

export const createBoardGrid = (size: number) => {
  const gameBoard = new Array(size);
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      gameBoard.push(Card());
    }
  }
  console.log(gameBoard);
  return gameBoard;
};
