'use client'
import { useEffect, useState } from 'react';
import aiFetch from './utils/api';

export default function Home() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await aiFetch('Hello bestie!');
      setResponse(apiResponse);
    };

    fetchData();
  }, []);

  return <h1>{response}</h1>;
}
