import React from 'react';
import { MemoryCellButton } from '../Buttons/memoryCell/MemoryCellButton';
import {
  generateRandomNumberPairs,
  generateShuffleNumbers,
} from '../../Utils/helpers/MemoryCell.helpers';
import styles from './styles.module.css';

const randomNumbers = generateRandomNumberPairs(18);
const shuffledNumbers = generateShuffleNumbers(randomNumbers);

console.log(shuffledNumbers);

const listItems = shuffledNumbers.map((item, index) => {
  return <MemoryCellButton buttonName={`${item}`} id={`cell_` + index} key={index} />;
});

export const GridContainer6X6 = () => {
  return <div className={styles.grid_container6X6}>{listItems}</div>;
};
