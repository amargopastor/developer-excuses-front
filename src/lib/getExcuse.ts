import axios from 'axios';

const getExcuse = async () => {
  const res = await axios.get('http://localhost:3001/excuses/random');
  const { title } = res.data;
  return title;
};

export default getExcuse;
