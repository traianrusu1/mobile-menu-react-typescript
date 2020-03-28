import React from 'react';
import styles from './Layout.module.css';
import MobileMenu from '../MobileMenu';
import menuItems from '../../utils/menuItems';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <MobileMenu menuItems={menuItems} />
      {children}
    </div>
  );
};

export default Layout;
