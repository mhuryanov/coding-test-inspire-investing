import axios from 'axios';

export const getBaseInfo = async () => {
  return await axios.get(
    'https://api.inspireinsight.com/api/tickers/1784/constituents?size=100'
  );
};
