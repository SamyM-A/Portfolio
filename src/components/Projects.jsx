import "../App.css"
import tech from "../assets/technologies/tech";
import github from "../assets/img/Github.png"

const Projects = (props) => {

    const languages = tech.filter( l =>
        props.language.includes(l.name)
    );

    return(        
    <div className="projects">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img className="imgprojet" src={props.image} height={300} width={500} alt="" />
        </a>
            <div className="project-content">
                    <div>
                        <h1><a href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a></h1>
                    </div>
                    <p>{props.description}</p>
                    <div className="project-contributors">
                        <p>{props.contributor ? `With ${props.contributor}` : "Projet personnel"}</p>
                        <a href={props.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="Code source sur GitHub" width={32}/></a>
                    </div>
                    <div className="project-technologies">
                        {languages.map( l => 
                            <img key={l.name} className="imglang" src={l.img} alt={l.name} width={40}/>
                        )}
                    </div>
            </div>
    </div>)

}
export default Projects;
