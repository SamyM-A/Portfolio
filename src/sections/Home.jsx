import "../App.css"
import samy from "../assets/home/samyP.png";

const Home = () => {
    return (
        <div id="home1">
            <img src={samy} alt="" height={400} width={400}/>
            <h1>Samy Mizi Allaoua</h1>
            <p id="p1">Salut, je m’appele Samy, j’ai 19 ans et j’étudie en informatique au cegept Montmorency depuis maintenants deux ans. </p>
            <p id="p2">Ma passion pour l’informatique a commencé dès l’instant où j’ai touché un ordinateur, et elle s’est intensifiée lorsque j’ai assemblé mon tout premier PC. Qu’il s’agisse de la création de jeux vidéo, de sites web ou d’applications, chaque projet alimente ma soif d’apprendre. Mon prochain objectif est de poursuivre mes études à l’université pour approfondir mes connaissances et réaliser mes ambitions.</p>
        </div>
    )
}
export default Home;
