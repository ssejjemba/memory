import { AnchorIcon } from '../components/Icons/anchor-icon/AnchorIcon';

import styles from './styles.module.css';

export default function Home() {
  return (
    <div>
      Hello World
      <div>
        <AnchorIcon className={styles.icon} />
      </div>
    </div>
  );
}
