import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { GetAuthorData } from "./service/author.service";

const App = () => {
  const { loading, error, data } = useFetch(GetAuthorData, "author");
  console.log(data);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>{data ? <>{JSON.stringify(data)}</> : <h1>{error}</h1>}</>
      )}
    </div>
  );
};

export default App;

// custom hook
// => build in hook => useState,useEffect,useRef,useContext,useReducer,useLayoutEffect,useId,useTransition,useCallback,useMemo etc...
// => lib provide hook => useParams,useNavigate,useLocation,useSearchParams
// => useFetch,
