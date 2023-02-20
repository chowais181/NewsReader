import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "1ea9fe2361ce4546b66d5bd09495cb3e";
  const BASE_URL = "https://newsapi.org/v2/top-headlines?language=en&apiKey";

  useEffect(() => {
    axios
      .get(` ${BASE_URL}=${apiKey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
