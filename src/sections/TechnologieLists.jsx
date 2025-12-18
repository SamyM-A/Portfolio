import tech from "../assets/technologies/tech";
import Technologie from "../components/Technologie";

const TechnologieList = () => {
  const langue = tech
    .filter((t) => t.type === "langage")
    .map((t) => <Technologie key={t.id} img={t.img} name={t.name} />);
  const frameworks = tech
    .filter((t) => t.type === "framework")
    .map((t) => <Technologie key={t.id} img={t.img} name={t.name} />);
  const autre = tech
    .filter((t) => t.type === "langage")
    .map((t) => <Technologie key={t.id} img={t.img} name={t.name} />);
  return (
    <div id="home2">
      <h1>Mes technologies !</h1>
      <h3>Langage de programmation</h3>
      <ul className="ul">{langue}</ul>
      <h3>Frameworks</h3>
      <ul className="ul">{frameworks}</ul>
      <h3>Autre technologie</h3>
      <ul className="ul">{autre}</ul>
    </div>
  );
};

export default TechnologieList;
