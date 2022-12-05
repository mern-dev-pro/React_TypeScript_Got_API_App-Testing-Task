import axios from 'axios';

const fetchCharacterDataFromApi = async (pageNum: number, pageSize: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/characters?page=${pageNum}&pageSize=${pageSize}`
  );
  return response;
};

const fetchHouseDetailDataFromApi = async (id: string) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/houses/${id}`);
  return response;
};

export { fetchCharacterDataFromApi, fetchHouseDetailDataFromApi };
