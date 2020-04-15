import React, { useState } from 'react';
import styles from './MobileMenu.module.scss';
import { Toolbar, SideDrawer, Backdrop } from '..';
import { SideDrawerMenuItem } from '../../interfaces/SideDrawerMenuItem';
import { MobileMenuConfig } from '../../interfaces/MobileMenuConfig';
import useCustomConfig from '../../hooks/useCustomConfig';
import ConfigContext from '../../contexts/ConfigContext';

interface Props {
  menuItems: SideDrawerMenuItem[];
  config?: MobileMenuConfig;
}

const MobileMenu: React.FC<Props> = ({ menuItems, config }: Props) => {
  const customStyles = useCustomConfig(config, ['fontColor']);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleClick = (): void => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <>
      <ConfigContext.Provider value={config}>
        <Backdrop show={showDrawer} onBackDropClick={handleToggleClick} />
        <div style={customStyles} className={styles.mobileMenu}>
          <Toolbar showDrawer={showDrawer} handleToggleClick={handleToggleClick} />
          <SideDrawer menuItems={menuItems} isOpen={showDrawer} />
        </div>
      </ConfigContext.Provider>
    </>
  );
};

export default MobileMenu;
