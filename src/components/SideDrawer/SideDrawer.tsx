import React, { useState } from 'react';
import styles from './SideDrawer.module.scss';
import { SideDrawerMenuItem } from '../../interfaces/SideDrawerMenuItem';
import SideDrawerMenu from '../SideDrawerMenu';
import { MobileMenuConfig } from '../../interfaces/MobileMenuConfig';
import useCustomConfig from '../../hooks/useCustomConfig';

interface Props {
  menuItems: SideDrawerMenuItem[];
  isOpen: boolean;
  config?: MobileMenuConfig;
}

const SideDrawer: React.FC<Props> = ({ menuItems, isOpen, config }: Props) => {
  const customStyles = useCustomConfig(config, ['primaryColor']);
  const [, setShowChildMenu] = useState(false);
  const [myMenuItems, setMyMenuItems] = useState(menuItems);

  const handleShowChildMenu = (show: boolean): void => {
    console.log(show);
    setShowChildMenu((prevState) => !prevState);
    setMyMenuItems(menuItems);
  };

  return (
    <div
      className={`${styles.sideDrawer} ${isOpen ? styles.open : styles.closed}`}
      style={customStyles}
    >
      {/* <SideDrawerMenu menuItems={menuItems} handleShowChildMenu={handleShowChildMenu} /> */}
      <SideDrawerMenu
        menuItems={myMenuItems}
        handleShowChildMenu={handleShowChildMenu}
        config={config}
      />
    </div>
  );
};

export default SideDrawer;
