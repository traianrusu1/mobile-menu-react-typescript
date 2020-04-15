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
      <MobileMenu
        menuItems={menuItems}
        config={{
          primaryColor: '#6ba1ce',
          secondaryColor: '#5675a5',
          fontColor: '#fff',
          sideDrawerWidth: '500px',
          toolbarHeight: '200px',
        }}
      />
      {children}
    </div>
  );
};

export default Layout;
