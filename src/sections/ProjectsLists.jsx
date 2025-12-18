import "../App.css"
import projects from "../assets/projets/projets";
import Project from "../components/Projects";

const ProjectsLists = () => {
    return (
        <div className="projectsListe">
            <h1 id="h1">Mes projets</h1>
            {projects.map((project) => (
                <Project
                    key={project.id}
                    id={project.id}
                    image={project.image}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    language={project.language}
                />
            ))}
        </div>
    )
}
export default ProjectsLists;