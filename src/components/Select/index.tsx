import React from 'react';

import styles from './styles.module.scss';

type SelectProps = {
  options: (string | number)[];
  setValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ options, setValue }) => {
  return (
    <div>
      <select onChange={setValue} className={styles.select}>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
