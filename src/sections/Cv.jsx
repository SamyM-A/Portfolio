import "../App.css"
import cvPdf from "../assets/pdf/samymiziallaoua_cv.pdf";

const cv = () => {
    return(
        <div className="cv">
            <h1>curriculum vitae</h1>
            <iframe 
            src={cvPdf}
            style={{ width: "32%", height: "91.3vh"}}
            title="CV"
            />
        </div>
    )
}
export default cv;