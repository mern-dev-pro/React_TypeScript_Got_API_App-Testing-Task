import React from 'react';

import styles from './styles.module.scss';

type ButtonProps = {
  label: string;
  onClick: VoidFunction;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button className={styles.wrapper} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
