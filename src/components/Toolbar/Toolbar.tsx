import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Toolbar.module.scss';
import { SideDrawer } from '..';

interface Props {
  myProp: string;
}

const Toolbar: React.FC<Props> = ({ myProp }: Props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleToggleClick = (): void => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <div className={styles.toolbar}>
      <button type="button" onClick={handleToggleClick} className={styles.toggleButton}>
        {!showDrawer ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
      </button>
      {showDrawer && <SideDrawer myProp="" />}

      {myProp}
    </div>
  );
};

export default Toolbar;
