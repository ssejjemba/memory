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
