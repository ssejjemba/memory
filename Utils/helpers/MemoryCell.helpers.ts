let chosenCellValue: string[] = [];
let chosenCellElements: string[] = [];

export const choseMemoryCell = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  chosenstyles: string,
) => {
  const cell = event.currentTarget.innerHTML;
  const cellElementid: string = event.currentTarget.id;

  chosenCellValue.push(cell);
  chosenCellElements.push(cellElementid);

  console.log(chosenCellElements);
  console.log(event.target);

  if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {
    //chnage styles for the chosen elements
    const firstChosenCell = document.getElementById(cellElementid[0]);
    console.log('first', firstChosenCell);

    const secondChosenCell = document.getElementById(cellElementid[1]);
    console.log('two', secondChosenCell);

    // firstChosenCell?.classList.remove(`${styles.revealed_memoryCell}`);
    // secondChosenCell?.classList.remove(`${styles.revealed_memoryCell}`);

    firstChosenCell?.classList.add(chosenstyles);
    secondChosenCell?.classList.add(chosenstyles);

    //empty chosen cell values array
    chosenCellValue = [];
    //change styles of chosen matching cells
    chosenCellElements = [];
  } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {
    console.log('Try again');
    //empty chosen cell values array
    chosenCellValue = [];
    //empty chosen cell elements array
    chosenCellElements = [];
  }
};

export const generateRandomNumberPairs = (gridNumber: number) => {
  const emptyArray: number[] = new Array(gridNumber);
  const baseNumbers: number[] = [];

  for (var i = 0; i < emptyArray.length; i++) {
    baseNumbers.push(i + 1);
  }
  const Numbers: number[] = [...baseNumbers, ...baseNumbers];
  return Numbers;
};

export function generateShuffleNumbers(array: number[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
