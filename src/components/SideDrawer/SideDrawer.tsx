import React, { useState } from 'react';
import styles from './SideDrawer.module.scss';
import { SideDrawerMenuItem } from '../../interfaces/SideDrawerMenuItem';
import SideDrawerMenu from '../SideDrawerMenu';

interface Props {
  menuItems: SideDrawerMenuItem[];
  isOpen: boolean;
}

const SideDrawer: React.FC<Props> = ({ menuItems, isOpen }: Props) => {
  const [, setShowChildMenu] = useState(false);
  const [myMenuItems, setMyMenuItems] = useState(menuItems);
  const handleShowChildMenu = (show: boolean): void => {
    console.log(show);
    setShowChildMenu((prevState) => !prevState);
    setMyMenuItems(menuItems);
  };

  return (
    <div className={`${styles.sideDrawer} ${isOpen ? styles.open : styles.closed}`}>
      {/* <SideDrawerMenu menuItems={menuItems} handleShowChildMenu={handleShowChildMenu} /> */}
      <SideDrawerMenu menuItems={myMenuItems} handleShowChildMenu={handleShowChildMenu} />
    </div>
  );
};

export default SideDrawer;
