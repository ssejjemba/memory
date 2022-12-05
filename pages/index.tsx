import { MemoryCellButton } from '../components/Buttons/memoryCellButton/MemoryCellButton';
import { Menubutton } from '../components/Buttons/MenuButton/MenuButton';
import { MenuSelectionbutton } from '../components/Buttons/MenuSelectionButton/MenuSelectionButton';
import { AnchorIcon } from '../components/Icons/anchor-icon/AnchorIcon';

import styles from './styles.module.css';

export default function Home() {
  return (
    <div>
      <AnchorIcon className={styles.icon} />
      <Menubutton buttonName="primary" />
      <MenuSelectionbutton buttonName="test" />
      <MemoryCellButton buttonName="1" />
      <MemoryCellButton buttonName="2" />
      <MemoryCellButton buttonName="3" />
      <MemoryCellButton buttonName="3" />
    </div>
  );
}
