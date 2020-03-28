import React from 'react';
import styles from './SideDrawer.module.scss';
import { SideDrawerMenuItem } from '../../interfaces/SideDrawerMenuItem';
import SideDrawerMenu from '../SideDrawerMenu';

interface Props {
  menuItems: SideDrawerMenuItem[];
}

const SideDrawer: React.FC<Props> = ({ menuItems }: Props) => {
  return (
    <div className={styles.sideDrawer}>
      <SideDrawerMenu menuItems={menuItems} />
    </div>
  );
};

export default SideDrawer;
