import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './SideDrawerMenuItem.module.scss';
import { SideDrawerMenuItem as SideDrawerMenuItemInterface } from '../../interfaces/SideDrawerMenuItem';
import ConfigContext from '../../contexts/ConfigContext';
import useCustomConfig from '../../hooks/useCustomConfig';

interface Props {
  item: SideDrawerMenuItemInterface;
  isHeading: boolean;
  onItemClick: (clickedItem: SideDrawerMenuItemInterface) => void;
}

const SideDrawerMenuItem: React.FC<Props> = ({ item, onItemClick, isHeading }: Props) => {
  const config = useContext(ConfigContext);
  const customStyles = useCustomConfig(config, ['primaryColor']);
  return (
    <button
      type="button"
      className={`${styles.sideDrawerMenuItem} ${isHeading ? styles.headingItemColor : ''}`}
      style={isHeading ? customStyles : undefined}
      onClick={(): void => {
        onItemClick(item);
      }}
    >
      {item.name}
      {item?.children?.length && item?.children?.length > 0 && (
        <div className={styles.showChildMenuButton}>
          <FontAwesomeIcon icon={isHeading ? faAngleDown : faAngleRight} size="2x" />
        </div>
      )}
    </button>
  );
};

export default SideDrawerMenuItem;
