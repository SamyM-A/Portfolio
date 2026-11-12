import "../App.css";
import samy from "../assets/home/samy.jpg";

const Home = () => {
    return (
        <div id="home1">
            <img src={samy} alt="Portrait de Samy Mizi Allaoua" height={220} width={220} />
je            <h1>Samy Mizi Allaoua</h1>
            <p>Je suis étudiant au baccalauréat en génie logiciel à l’École de technologie supérieure (ÉTS), avec un intérêt particulier pour l’intelligence artificielle et le machine learning. Mon expérience en développement logiciel chez ARCHIWEB m’a permis de renforcer mes compétences techniques et de travailler sur des projets concrets. Je souhaite continuer à approfondir mes connaissances et à relever de nouveaux défis technologiques.</p>
        </div>
    );
};

export default Home;
