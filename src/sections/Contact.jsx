import "../App.css"
import { useState } from 'react';
import github from "../assets/img/Github.png"
import linkdin from "../assets/img/LinkedIn.png"

const Contact = () => {

    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "329e6c4b-d011-444d-8391-e11d3b07aae6");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <div id="contactDiv">
            <h1 id="h1contact">Me contacter</h1>
            <div id="link"> 
                    <a className="boite" href="">
                        <img src={github} alt="" width={50}/>
                        <p>Github Proffessionel</p>
                    </a>
                    <a className="boite" href="">
                        <img src={github} alt="" width={50}/>
                        <p>Github Scolaire</p>
                    </a>
                    <a className="boite"  href="https://www.linkedin.com/in/samy-mizi-allaoua-289750383/"  target="_BLANK">
                        <img src={linkdin} alt="" width={50}/>
                        <p>LinkedIn</p>
                    </a>
                    <a className="boite"  href="https://www.linkedin.com/in/samy-mizi-allaoua-289750383/"  target="_BLANK">
                        <img src={linkdin} alt="" width={50}/>
                        <p>Mail</p>
                    </a>
        
                <a href="mailto:samymiziallaoua@hotmail.com">ou par Mail</a>
            </div>
            <form onSubmit={handleSubmit}>
                <div id="contact">
                    <div id="nomemail">
                        <input type="text" name="name" id="nom" placeholder="Nom" required/>
                        <input type="text" name="email" id="email" placeholder="Email" required />
                    </div>
                        <textarea rows={1} name="message"  id="message" type="text" placeholder="Message" required/> 
                        <button>Envoyer ➞</button>
                </div>
            </form>
        </div>
    )
}
export default Contact;