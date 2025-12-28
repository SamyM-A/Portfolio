import "../App.css"
import samy from "../assets/home/samyP.png";

const Home = () => {
    return (
        <div id="home1">
            <img src={samy} alt="" height={400} width={400}/>
            <div>
                <h1>Samy Mizi Allaoua</h1>
                <p>Salut, je m’appelle Samy, j’ai 19 ans et j’étudie en informatique au cégep Montmorency depuis maintenant deux ans. Ma passion pour l’informatique a commencé dès le moment où j’ai touché un ordinateur et s’est renforcée lorsque j’ai assemblé mon tout premier PC. Qu’il s’agisse de la création de jeux vidéo, de sites web ou d’applications, chaque projet nourrit ma soif d’apprendre. Mon objectif est de poursuivre mes études à l’université afin d’approfondir mes connaissances et de concrétiser mes ambitions.</p>
            </div>
        </div>
    )
}
export default Home;
