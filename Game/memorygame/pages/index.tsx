import { Menubutton } from '../components/Buttons/MenuButton/MenuButton';
import { MenuSelectionbutton } from '../components/Buttons/MenuSelectionButton/MenuSelectionButton';
import { AnchorIcon } from '../components/Icons/anchor-icon/AnchorIcon';

import styles from './styles.module.css';

export default function Home() {
  return (
    <div>
      Hello World
      <div>
        <AnchorIcon className={styles.icon} />
        <Menubutton buttonName="primary" />
        <MenuSelectionbutton buttonName="test" />
      </div>
    </div>
  );
}
