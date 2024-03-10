import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const ArticleInfo = ({ data, ind, setind }) => {
  const articedata = data[ind];
  const title = data[ind].title;
  const dates = data[ind].dates;
  const duties = data[ind].duties;
  console.log(data[ind], "io");
  console.log(title, "io");
  console.log(ind, "s");

  return (
    <section>
      <h1 className="font-bold  text-3xl">{title}</h1>
      <p className="font-mono">{dates}</p>
      <div className="mt-6">
        {duties?.map((duty, index) => (
          <div key={index}>
            <FontAwesomeIcon
              icon={faGreaterThan}
              style={{ color: "#63E6BE" }}
            />

            <p>{duty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleInfo;
