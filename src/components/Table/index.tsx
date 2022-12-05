import React from 'react';

import styles from './styles.module.scss';

type TableProps = {
  data: { [key: string]: any }[];
  setLimits: React.Dispatch<React.SetStateAction<number>>;
};

const Table: React.FC<TableProps> = ({ data, setLimits }) => {
  const setLimitPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimits(parseInt(e.target.value) ?? 10);
  };
  return (
    <>
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
                    <td key={id}>
                      {key === 'allegiances' ? (
                        item[key][0] !== '' ? (
                          <ul className="list-disc">
                            {item[key]?.map((allegiance: string) => (
                              <li key={allegiance}>{allegiance}</li>
                            ))}
                          </ul>
                        ) : (
                          'Unknown'
                        )
                      ) : (
                        item[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.pagination}>
        <select className={styles.select} onChange={setLimitPerPage}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <div className={styles.buttonGroup}>
          <button>First</button>
          <button>Prev</button>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </>
  );
};

export default Table;
