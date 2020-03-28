import React from 'react';
import styles from './SideDrawerMenu.module.scss';
import { SideDrawerMenuItem as SideDrawerMenuItemInterface } from '../../interfaces/SideDrawerMenuItem';
import { SideDrawerMenuItem } from '..';

interface Props {
  menuItems: SideDrawerMenuItemInterface[];
}

const SideDrawerMenu: React.FC<Props> = ({ menuItems }: Props) => {
  return (
    <div className={styles.sideDrawerMenu}>
      {menuItems.map((item) => (
        <SideDrawerMenuItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default SideDrawerMenu;
