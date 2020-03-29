import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './SideDrawerMenuItem.module.scss';
import { SideDrawerMenuItem as SideDrawerMenuItemInterface } from '../../interfaces/SideDrawerMenuItem';

interface Props {
  item: SideDrawerMenuItemInterface;
  isHeading: boolean;
  onItemClick: (clickedItem: SideDrawerMenuItemInterface) => void;
}

const SideDrawerMenuItem: React.FC<Props> = ({ item, onItemClick, isHeading }: Props) => {
  return (
    <button
      type="button"
      className={styles.sideDrawerMenuItem}
      onClick={(): void => {
        onItemClick(item);
      }}
    >
      {item.name}
      {item?.children?.length && item?.children?.length > 0 && (
        <div className={styles.showChildMenuButton}>
          <FontAwesomeIcon icon={isHeading ? faAngleLeft : faAngleRight} size="2x" />
        </div>
      )}
    </button>
  );
};

export default SideDrawerMenuItem;
