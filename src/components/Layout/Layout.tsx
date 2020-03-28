import React from 'react';
import styles from './Layout.module.css';
import { Toolbar } from '..';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Toolbar myProp="" />
      {children}
    </div>
  );
};

export default Layout;
