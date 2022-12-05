import React from 'react';
import styles from './styles.module.css';

type menuSelectionButtonProps = {
  buttonName: string;
};

const makeButtonAvtive = () => {
  const menuselectiobutton = document.querySelector(`.${styles.menuSelectionButton}`);

  menuselectiobutton?.classList.remove(`.${styles.menuSelectionButton}`);

  menuselectiobutton?.classList.add(`${styles.active}`);
};

export const MenuSelectionbutton = (props: menuSelectionButtonProps) => {
  const { buttonName } = props;

  return (
    <button
      data-testid="button_element"
      className={styles.menuSelectionButton}
      onClick={makeButtonAvtive}
    >
      {buttonName}
    </button>
  );
};
