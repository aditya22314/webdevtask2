import React, { useState } from "react";
import Tab from "./Tab";

const PersonList = ({ data, ind, setind }) => {
  console.log(data, "check");

  const handleClick = (index) => {
    setind(index);
    setactivetab(index === activetab ? null : index);
  };
  const [activetab, setactivetab] = useState(null);
  return (
    <div className="flex flex-col gap-5">
      {data?.map((tab, index) => {
        return (
          <Tab
            key={index}
            name={tab.company}
            isActive={activetab === index}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default PersonList;
