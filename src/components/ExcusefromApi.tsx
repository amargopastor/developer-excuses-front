import React, { useState, useEffect } from 'react';
import getExcuse from '../lib/getExcuse';
import Card from '../components/Card';

const ExcusefromApi = () => {
  const [excuse, setExcuse] = useState();
  useEffect(() => {
    getExcuse().then((ex) => {
      setExcuse(ex);
    });
  }, []);

  if (excuse) {
    return <div><Card ex={excuse} /></div>;
  }
  return <p>loading excuse...</p>;
};

export default ExcusefromApi;
