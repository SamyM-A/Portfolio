import "../App.css"
import samy from "../assets/home/samyP.png";

const Home = () => {
    return (
        <div id="home1">
            <img src={samy} alt="" height={400} width={400}/>
            <div>
                <h1>Samy Mizi Allaoua</h1>
                <p>Je m’appelle Samy, j’ai 19 ans et j’étudie en informatique. Ma passion pour ce domaine est née dès mon premier contact avec un ordinateur et s’est renforcée lorsque j’ai assemblé mon tout premier PC. À travers la création de jeux vidéo, de sites web ou d’applications, chaque projet nourrit ma curiosité et mon désir d’apprendre. Je souhaite m’orienter vers les domaines du machine learning et de l’intelligence artificielle, qui représentent pour moi une continuité naturelle de mon intérêt pour les technologies innovantes. Mon objectif est de continuer à développer mes compétences et de concrétiser mes ambitions professionnelles dans le domaine de l’informatique.</p>
            </div>
        </div>
    )
}
export default Home;
