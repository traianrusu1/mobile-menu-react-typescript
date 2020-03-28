import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Toolbar.module.scss';

interface Props {
  showDrawer: boolean;
  handleToggleClick: () => void;
}

const Toolbar: React.FC<Props> = ({ showDrawer, handleToggleClick }: Props) => {
  return (
    <div className={styles.toolbar}>
      <button type="button" onClick={handleToggleClick} className={styles.toggleButton}>
        {!showDrawer ? (
          <FontAwesomeIcon icon={faBars} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faTimes} size="2x" />
        )}
      </button>
    </div>
  );
};

export default Toolbar;
