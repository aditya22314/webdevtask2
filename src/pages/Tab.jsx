
const Tab = ({ name, isActive, onClick }) => {
  return (
    <div className="flex gap-3 items-center" onClick={onClick}>
      {isActive ? <div className="bg-green-400 w-[2px] h-[25px]"> </div> : ""}
      <div> {name}</div>
    </div>
  );
};

export default Tab;
