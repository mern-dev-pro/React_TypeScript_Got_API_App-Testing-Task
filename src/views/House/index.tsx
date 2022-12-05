import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { fetchHouseDetailDataFromApi } from 'utils/api';

import styles from './styles.module.scss';

type HouseDetailType = {
  [key: string]: any;
};

const House = () => {
  const { id } = useParams();
  const [houseData, setHouseData] = useState<HouseDetailType | undefined>(undefined);

  /*
   * Fetch House Detail Data From API
   */
  useEffect(() => {
    const fetchHousesDetailData = async () => {
      if (id) {
        try {
          const { data } = await fetchHouseDetailDataFromApi(id);
          setHouseData({
            'Name of the House': data?.name,
            Region: data?.region,
            'Coat of Arms': data?.coatOfArms,
            Words: data?.words,
            Titles: data?.titles ?? [],
            Seats: data?.seats ?? [],
            'Has died out': data?.diedOut,
            'Has overlord': data?.overlord?.split('/')?.pop(),
            'Number of Cadet Branches': data?.cadetBranches?.length,
          });
        } catch (error) {
          setHouseData(undefined);
        }
      }
    };
    fetchHousesDetailData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.back}>
        Back
      </Link>
      <h2 className={styles.heading}>House Details</h2>
      {houseData && (
        <>
          {Object.keys(houseData).map(key => (
            <div className={styles.list} key={key}>
              <p className={styles.key}>{key}</p>
              <div className={styles.value}>
                {key === 'Titles' || key === 'Seats' ? (
                  <ul>
                    {houseData[key]?.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <span className={styles.value}>{houseData[key]}</span>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default House;
