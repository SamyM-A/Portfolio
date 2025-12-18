import "../App.css"
const Projects = (props) => {
    
    if (props.id % 2 === 0) {
        return(        
        <div className="projects">
            <img src={props.image} height={400} width={600} alt="" />
            <div id="pasimg">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <p>Language : {props.language}</p>
                <p>Lien : {props.link}</p>
            </div>
        </div>)
    }else{
        return (        
        <div className="projects">
            <div id="pasimg">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <p>Language : {props.language}</p>
                <p>Lien : {props.link}</p>
            </div>
            <img src={props.image} height={400} width={600} alt="" />
        </div>    )
    }

}
export default Projects;