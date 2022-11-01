import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState([]);

  async function getData() {
    try {
      const fetchData = await axios.get(url);
      setValue(fetchData.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {error, loading, value};
}

export default useFetch;
