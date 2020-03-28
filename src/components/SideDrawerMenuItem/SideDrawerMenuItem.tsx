import React from 'react';
import styles from './SideDrawerMenuItem.module.scss';
import { SideDrawerMenuItem as SideDrawerMenuItemInterface } from '../../interfaces/SideDrawerMenuItem';

interface Props {
  item: SideDrawerMenuItemInterface;
}

const SideDrawerMenuItem: React.FC<Props> = ({ item }: Props) => {
  return <div className={styles.sideDrawerMenuItem}>{item.name}</div>;
};

export default SideDrawerMenuItem;
