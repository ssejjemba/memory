import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';

type memoryCellButtonProps = {
  buttonName: string;
};

let chosenCellValue: string[] = [];
let chosenCellElement: [] = [];

const choseMemoryCell = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const cell = event.currentTarget.innerHTML;
  chosenCellValue.push(cell);
  console.log(chosenCellValue);
  if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {
    console.log('You gat me');
    chosenCellValue = [];
  } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {
    console.log('Try again');
    chosenCellValue = [];
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
