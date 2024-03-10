import PersonList from "./PersonList";
import ArticleInfo from "./ArticleInfo";
import { useEffect, useState } from "react";

const JobsCenter = ({ data }) => {
  const [ind, setind] = useState(0);
  useEffect(() => {
    setind(ind);
  }, [ind]);
  console.log(ind, "ko");
  return (
    <div className="flex  gap-64">
      <PersonList data={data} ind={ind} setind={setind} />
      <ArticleInfo data={data} ind={ind} setind={setind} />
    </div>
  );
};

export default JobsCenter;
