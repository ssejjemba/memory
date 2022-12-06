import React from 'react';
import styles from './styles.module.css';

type menuButtonProps = {
  buttonName: string;
};

export const Menubutton = (props: menuButtonProps) => {
  const { buttonName } = props;

  return (
    <button data-testid="button_element" className={styles.menuButton}>
      {buttonName}
    </button>
  );
};
