import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';

type memoryCellButtonProps = {
  buttonName: string;
  id: string;
};

let chosenCellValue: string[] = [];
let chosenCellElements: string[] = [];

const choseMemoryCell = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

    firstChosenCell?.classList.add(`${styles.revealed_memoryCell}`);
    secondChosenCell?.classList.add(`${styles.revealed_memoryCell}`);

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

export const MemoryCellButton = (props: memoryCellButtonProps) => {
  const { buttonName, id } = props;

  return (
    <button
      data-testid="button_element"
      className={styles.memoryCellButton}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        choseMemoryCell(event);
      }}
      id={id}
    >
      {buttonName}
    </button>
  );
};
