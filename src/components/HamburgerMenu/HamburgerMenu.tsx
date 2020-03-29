import React from 'react';
import styles from './HamburgerMenu.module.scss';

interface Props {
  isOpen: boolean;
}

const HamburgerMenu: React.FC<Props> = ({ isOpen }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={`${'test'} ${isOpen ? styles.active : ''}`} href="#" title="Menu">
      <span className={`${styles.line} ${styles.line1}`} />
      <span className={`${styles.line} ${styles.line2}`} />
      <span className={`${styles.line} ${styles.line3}`} />
    </a>
    // <div className={ styles.hamburgerMenu }>
    //   HamburgerMenu
    //   {myProp}
    // </div>
  );
};

export default HamburgerMenu;
