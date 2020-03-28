import React from 'react';
import styles from './Header.module.css';

interface Props {
  myProp: string;
}

const Header: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={ styles.header }>
      Header
      {myProp}
    </div>
  );
};

export default Header;
