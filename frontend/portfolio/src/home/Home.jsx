import "./Home.css"
import samy from ".././assets/home/samy.jpg"
import Technologie from "../Technologie/Technologie";
import tech from "../assets/technologies/tech";

const Home = () => {
    return (
        <>
        <div id="home1">
            <img src={samy} alt="" height={520} width={400}/>
            <h1>Bienvenu sur mon portfolio</h1>
            <p id="p1">Salut, je m’appele Samy, j’ai 19 ans et j’étudie en informatique au cegept Montmorency depuis maintenants deux ans. </p>
            <p id="p2">Ma passion pour l’informatique a commencé dès l’instant où j’ai touché un ordinateur, et elle s’est intensifiée lorsque j’ai assemblé mon tout premier PC. Qu’il s’agisse de la création de jeux vidéo, de sites web ou d’applications, chaque projet alimente ma soif d’apprendre. Mon prochain objectif est de poursuivre mes études à l’université pour approfondir mes connaissances et réaliser mes ambitions.</p>
        </div>
        <div id="intersection"></div>
        <div id="home2">
            <h1>Mes technologies !</h1>
            <h3>Langage de programmation</h3>
            <ul className="ul">
                {tech.filter(t => t.type === "langage").map(t => (
                    <Technologie key={t.id} img={t.img} name={t.name} />
                ))}
            </ul>
            <h3>Frameworks</h3>
            <ul className="ul">
                {tech.filter(t => t.type === "framework").map(t => (
                    <Technologie key={t.id} img={t.img} name={t.name} />
                ))}
            </ul>
            <h3>Autre technologie</h3>
            <ul className="ul"> 
                {tech.filter(t => t.type === "autre").map(t => (
                    <Technologie key={t.id} img={t.img} name={t.name} />
                ))}
            </ul>
        </div>
        </>
    )
}
export default Home;