import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';

type memoryCellButtonProps = {
  buttonName: string;
};

let chosenCellValue: string[] = [];
let chosenCellElements: HTMLElement[] = [];

const choseMemoryCell = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const cell = event.currentTarget.innerHTML;
  const cellElement: HTMLElement = event.currentTarget;

  chosenCellValue.push(cell);
  chosenCellElements.push(cellElement);

  console.log(chosenCellElements);

  if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {
    //chnage styles for the chosen elements

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
  const { buttonName } = props;

  return (
    <button
      data-testid="button_element"
      className={styles.memoryCellButton}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        choseMemoryCell(event);
      }}
    >
      {buttonName}
    </button>
  );
};
