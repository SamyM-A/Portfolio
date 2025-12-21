import tech from "../assets/technologies/tech";
import Technologie from "../components/Technologie";
import "../App.css";

const TechnologieList = () => {
  
  const langue = tech
    .filter((t) => t.type === "langage")
    .map((t) => <Technologie key={t.id} img={t.img} name={t.name} />);
  const frameworks = tech
    .filter((t) => t.type === "framework")
    .map((t) => <Technologie key={t.id} img={t.img} name={t.name} />);
  const autre = tech
    .filter((t) => t.type === "autre")
    .map((t) => <Technologie key={t.id} img={t.img} name={t.name} />);

  return (
    <div id="home2">

        <h1>Mes technologies !</h1>
        
        <h3>Langage de programmation</h3>
        <div className="carousel">  
          <div className="groupe">{langue}</div>
          <div className="groupe">{langue}</div>
        </div>

        <h3>Frameworks</h3>
        <div className="carousel">  
          <div className="groupe">{frameworks}</div>
          <div className="groupe">{frameworks}</div>
        </div>
        
        <h3>Autre technologie</h3>
        <div className="carousel">  
          <div className="groupe">{autre}</div>
          <div className="groupe">{autre}</div>
        </div>
    </div>
  );
};

export default TechnologieList;
