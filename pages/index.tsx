import { MemoryCellButton } from '../components/Buttons/memoryCellButton/MemoryCellButton';
import { AnchorIcon } from '../components/Icons/anchor-icon/AnchorIcon';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div>
      <MemoryCellButton buttonName="1" />
      <MemoryCellButton buttonName="2" />
      <MemoryCellButton buttonName="3" />
      <MemoryCellButton buttonName="3" />
    </div>
  );
}
