import { useEffect, useState } from "react";

export const useForm = () => {
  const [inputVal, setInputVal] = useState({});

  const onInputChange = (e, type = null) => {
    if (type === "checkbox") {
      setInputVal({ ...inputVal, [e.target.name]: e.target.checked });
    } else {
      setInputVal({ ...inputVal, [e.target.name]: e.target.value });
    }
  };

  return { inputVal, onInputChange };
};

export const useFetch = (url, route, apiType = null) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${url}/${route}?limit=10`);
    const json = await res.json();
    setApiData(apiType ? json : json[route]);
  };

  useEffect(() => {
    fetchData();
  }, [url, route]);

  return { apiData };
};
