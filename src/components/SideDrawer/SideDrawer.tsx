import React from 'react';
import styles from './SideDrawer.module.scss';

interface Props {
  myProp: string;
}

const SideDrawer: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={ styles.sideDrawer }>
      SideDrawer
      {myProp}
    </div>
  );
};

export default SideDrawer;
