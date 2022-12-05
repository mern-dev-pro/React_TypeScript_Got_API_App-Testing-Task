import axios from 'axios';

const fetchDataFromApi = async (pageNum: number, pageSize: number) => {
  const response = await axios.get(`https://anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=${pageSize}`);
  return response;
};

export { fetchDataFromApi };
