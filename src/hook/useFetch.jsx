import React, { useState, useEffect } from "react";
import { GetBookData } from "../service/book.service";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    // (async () => {
    //   const res = await fetch("http://localhost:8000/book");
    //   const data = await res.json();
    //   console.log(data);
    // })();
    (async () => {
      const data = await fetchFun(arg);
      setData((pre) => {
        try {
          return {
            error: null,
            loading: false,
            data: data,
          };
        } catch (error) {
          setData((pre) => {
            return {
              error: error.message,
              loading: false,
              data: null,
            };
          });
        }
      });
    })();
  }, []);
  return data;
};

export default useFetch;
