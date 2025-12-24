import "../App.css"
import tech from "../assets/technologies/tech";
import github from "../assets/img/github.png"

const Projects = (props) => {

    const languages = tech.filter( l =>
        props.language.includes(l.name)
    );

    return(        
    <div className="projects">
        <a href={props.link} target="_blank">
            <img className="imgprojet" src={props.image} height={300} width={500} alt="" />
            <div id="pasimg">
                    <div>
                        <h1>{props.name}</h1>
                        <a href={props.github} target="_blank"><img src={github} alt="" width={40}/></a>
                    </div>
                    <p>{props.description}</p>
                    <p>With {props.contributor}</p>
                    <div>
                        {languages.map( l => 
                            <img className="imglang" src={l.img} alt="" width={40}/>
                        )}
                    </div>
            </div>
        </a>
    </div>)

}
export default Projects;