import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./pages/Heading";
import JobsCenter from "./pages/JobsCenter";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://course-api.com/react-tabs-project");
      const jsonresponse = await response.json();
      setData(jsonresponse);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "DATA");
  return (
    <>
      <section className="  m-20">
        <Heading />
      </section>
      <section className="m-20">
        <JobsCenter data={data} />
      </section>
    </>
  );
}

export default App;
