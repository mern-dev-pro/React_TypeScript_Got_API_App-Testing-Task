import React from 'react';

import styles from './styles.module.scss';

type TableProps = {
  data: { [key: string]: string }[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {!!data && data?.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((item: string) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index: number) => (
              <tr key={index}>
                {Object.keys(data[index]).map((key, id) => (
                  <td key={id}>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
