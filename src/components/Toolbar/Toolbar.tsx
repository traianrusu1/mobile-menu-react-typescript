import React from 'react';
import styles from './Toolbar.module.css';

interface Props {
  myProp: string;
}

const Toolbar: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={styles.toolbar}>
      Toolbar
      {myProp}
    </div>
  );
};

export default Toolbar;
