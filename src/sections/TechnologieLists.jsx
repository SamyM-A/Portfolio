import tech from "../assets/technologies/tech";
import Technologie from "../components/Technologie";

const TechnologieList = () => {
  return (
    <div id="home2">
      <h1>Mes technologies !</h1>
      <h3>Langage de programmation</h3>
      <ul className="ul">
        {tech
          .filter((t) => t.type === "langage")
          .map((t) => (
            <Technologie key={t.id} img={t.img} name={t.name} />
          ))}
      </ul>
      <h3>Frameworks</h3>
      <ul className="ul">
        {tech
          .filter((t) => t.type === "framework")
          .map((t) => (
            <Technologie key={t.id} img={t.img} name={t.name} />
          ))}
      </ul>
      <h3>Autre technologie</h3>
      <ul className="ul">
        {tech
          .filter((t) => t.type === "autre")
          .map((t) => (
            <Technologie key={t.id} img={t.img} name={t.name} />
          ))}
      </ul>
    </div>
  );
};

export default TechnologieList;
