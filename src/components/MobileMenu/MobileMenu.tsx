import React from 'react';
import styles from './MobileMenu.module.scss';
import { Toolbar } from '..';

interface Props {
  myProp: string;
}

const MobileMenu: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={styles.mobileMenu}>
      <Toolbar myProp="" />
      {myProp}
    </div>
  );
};

export default MobileMenu;
