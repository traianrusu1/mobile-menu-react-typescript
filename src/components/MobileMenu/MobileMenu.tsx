import React, { useState } from 'react';
import styles from './MobileMenu.module.scss';
import { Toolbar, SideDrawer, Backdrop } from '..';
import { SideDrawerMenuItem } from '../../interfaces/SideDrawerMenuItem';

interface Props {
  menuItems: SideDrawerMenuItem[];
}

const MobileMenu: React.FC<Props> = ({ menuItems }: Props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleClick = (): void => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Backdrop show={showDrawer} onBackDropClick={handleToggleClick} />
      <div className={styles.mobileMenu}>
        <Toolbar showDrawer={showDrawer} handleToggleClick={handleToggleClick} />
        {showDrawer && <SideDrawer menuItems={menuItems} />}
      </div>
    </>
  );
};

export default MobileMenu;