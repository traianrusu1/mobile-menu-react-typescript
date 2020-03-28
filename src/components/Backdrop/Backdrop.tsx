/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './Backdrop.module.scss';

interface Props {
  show: boolean;
  onBackDropClick: () => void;
}

const Backdrop: React.FC<Props> = ({ show, onBackDropClick }: Props) => {
  return show ? <div className={styles.backdrop} onClick={onBackDropClick} /> : <></>;
};

export default Backdrop;
