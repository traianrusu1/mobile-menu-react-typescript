import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Toolbar.module.scss';
import ConfigContext from '../../contexts/ConfigContext';
import useCustomConfig from '../../hooks/useCustomConfig';

interface Props {
  showDrawer: boolean;
  handleToggleClick: () => void;
}

const Toolbar: React.FC<Props> = ({ showDrawer, handleToggleClick }: Props) => {
  const config = useContext(ConfigContext);
  const customStyles = useCustomConfig(config, ['primaryColor']);
  return (
    <div className={styles.toolbar} style={customStyles}>
      <button
        type="button"
        onClick={handleToggleClick}
        className={`${styles.toggleButton} ${showDrawer ? styles.open : styles.closed}`}
      >
        {!showDrawer ? (
          <FontAwesomeIcon icon={faBars} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faTimes} size="2x" />
        )}
      </button>

      {/* <button
        type="button"
        onClick={handleToggleClick}
        // className={`${styles.toggleButton} ${showDrawer ? styles.open : styles.closed}`}
        className="tight"
      >
        <HamburgerMenu isOpen={showDrawer} />
      </button>
      <HamburgerMenu isOpen={showDrawer} /> */}
    </div>
  );
};

export default Toolbar;
