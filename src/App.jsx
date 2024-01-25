import React, { useEffect } from "react";
import { GetBookData } from "./service/book.service";

const App = () => {
  useEffect(() => {
    // (async () => {
    //   const res = await fetch("http://localhost:8000/book");
    //   const data = await res.json();
    //   console.log(data);
    // })();
    (async () => {
      const data = await GetBookData("book");
      console.log(data);
    })();
  }, []);
  return <div>App</div>;
};

export default App;
