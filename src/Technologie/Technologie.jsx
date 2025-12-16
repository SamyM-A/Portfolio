import "./Technologie.css";
const Technologie = (props) => {

    return (
        <div className="tech">
            <img src={props.img} height={100} width={100} alt="" />
            <p>{props.name}</p>
        </div>
    )
}
export default Technologie;