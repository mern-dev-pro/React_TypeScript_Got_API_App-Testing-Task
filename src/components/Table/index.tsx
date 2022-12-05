import React from 'react';

import styles from './styles.module.scss';

type TableProps = {
  data: { [key: string]: any }[];
  limits: number;
  currentPage: number;
  setLimits: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Table: React.FC<TableProps> = ({ data, limits = 10, currentPage = 1, setLimits, setCurrentPage }) => {
  /*
   * Handle Limit Item Number Per Page
   */
  const handleLimitPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimits(parseInt(e.target.value) ?? 10);
  };
  /*
   * Handle Current Page Number
   */
  const handleCurrentPage = (mode: string) => {
    const total = parseInt(process.env.REACT_APP_TOTAL_CHARACTER_NUM ?? '0');
    switch (mode) {
      case 'FIRST':
        setCurrentPage(1);
        break;
      case 'PREV':
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          setCurrentPage(1);
        }
        break;
      case 'NEXT':
        if (currentPage < Math.ceil(total / limits)) {
          setCurrentPage(currentPage + 1);
        } else {
          setCurrentPage(Math.ceil(total / limits));
        }
        break;
      case 'LAST':
        setCurrentPage(Math.ceil(total / limits));
        break;
      default:
        break;
    }
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
                          'No allegiances'
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
        <select className={styles.select} onChange={handleLimitPerPage}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <div className={styles.buttonGroup}>
          <button onClick={() => handleCurrentPage('FIRST')}>First</button>
          <button onClick={() => handleCurrentPage('PREV')}>Prev</button>
          <button onClick={() => handleCurrentPage('NEXT')}>Next</button>
          <button onClick={() => handleCurrentPage('LAST')}>Last</button>
        </div>
      </div>
    </>
  );
};

export default Table;
