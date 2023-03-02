export const createBoardGrid = (cells: number) => {
  const gameBoard = [];
  for (let i = 0; i < cells; i++) {
    gameBoard.push(1);
    console.log(gameBoard);
  }
  return gameBoard;
};
