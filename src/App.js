import { useEffect, useState } from "react";
import "./App.css";
import Course from "./Components/Course";

function App() {
  const [pageInfos, setPageInfos] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPageInfos(data));
  }, []);
  return (
    <div>
      {pageInfos.map((pageInfo) => (
        <Course pageInfo={pageInfo}></Course>
      ))}
    </div>
  );
}

export default App;
