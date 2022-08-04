import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Fund from '../components/Fund';
import HoldingsTable from '../components/HoldingsTable';
import ErrorResult from '../components/ErrorResult';
import { getBaseInfo } from '../api';
import { DataModel } from '../models/data';
import { AxiosError } from 'axios';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataModel | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  useEffect(() => {
    setLoading(true);
    getBaseInfo()
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setData(null);
        setError(err);
      });
  }, []);

  return (
    <div className='App'>
      {loading && <Loading />}
      {error && !loading && <ErrorResult error={error} />}
      {data && !loading && <Fund fund={data.fund} />}
      {data && !loading && <HoldingsTable data={data} />}
    </div>
  );
};

export default App;
