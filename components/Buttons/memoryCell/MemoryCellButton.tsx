import { choseMemoryCell } from '../../../Utils/helpers/MemoryCell.helpers';
import styles from './styles.module.css';

type memoryCellButtonProps = {
  buttonName: string;
  id: string;
};

export const MemoryCellButton = (props: memoryCellButtonProps) => {
  const { buttonName, id } = props;

  return (
    <button
      data-testid="button_element"
      className={styles.memoryCellButton}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        choseMemoryCell(event, `${styles.revealed_memoryCell}`);
      }}
      id={id}
    >
      {buttonName}
    </button>
  );
};
