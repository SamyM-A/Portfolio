import "../App.css";
import { useState } from "react";
import linkedin from "../assets/img/LinkedIn.png";
import mail from "../assets/img/Mail.png";
import github from "../assets/img/Github.png";

const Contact = () => {
    const [result, setResult] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sending) return;
        const form = event.currentTarget;
        setSending(true);
        setResult("Envoi en cours…");
        const formData = new FormData(form);
        formData.append("access_key", "329e6c4b-d011-444d-8391-e11d3b07aae6");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error("Submission failed");
            setResult("Merci ! Votre message a bien été envoyé.");
            form.reset();
        } catch {
            setResult("L’envoi a échoué. Réessayez ou contactez-moi par courriel.");
        } finally {
            setSending(false);
        }
    };

    return (
        <div id="contactDiv">
            <h1 id="h1contact">Me contacter</h1>
            <p className="contact-intro">Un projet, une question ? Écrivez-moi.</p>
            <div className="contact-links">
                <a href="mailto:samymiziallaoua@hotmail.com">
                    <img src={mail} alt="" />Courriel
                </a>
                <a href="https://www.linkedin.com/in/samy-mizi-allaoua-289750383/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" />LinkedIn
                </a>
                <a href="https://github.com/SamyM-A" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" />GitHub
                </a>
            </div>
            <form id="contact" onSubmit={handleSubmit} aria-busy={sending}>
                <div id="nomemail">
                    <label htmlFor="nom">Nom
                        <input type="text" name="name" id="nom" autoComplete="name" placeholder="Votre nom" required />
                    </label>
                    <label htmlFor="email">Courriel
                        <input type="email" name="email" id="email" autoComplete="email" placeholder="vous@exemple.com" required />
                    </label>
                </div>
                <label htmlFor="message">Message
                    <textarea rows={4} name="message" id="message" placeholder="Parlez-moi de votre projet…" required />
                </label>
                <div className="contact-actions">
                    <button type="submit" disabled={sending}>{sending ? "Envoi…" : "Envoyer"}</button>
                    <p className="contact-status" role="status">{result}</p>
                </div>
            </form>
        </div>
    );
};

export default Contact;
