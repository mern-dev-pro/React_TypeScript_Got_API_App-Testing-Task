import React, { ChangeEventHandler } from 'react';

import styles from './styles.module.scss';

type TextInputProps = {
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<TextInputProps> = ({ placeholder = '', onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default TextInput;
