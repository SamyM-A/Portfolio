import "../App.css";

const etapes = [
    {
        nom: "Collège Montmorency",
        type: "Formation",
        date: "Mai 2026",
        titre: "DEC en techniques de l’informatique",
    },
    {
        nom: "ARCHIWEB",
        type: "Stage",
        date: "Mars — mai 2026",
        titre: "Développeur Web",
        description: "Développement PHP, tableau de bord PostgreSQL et amélioration de SPAÉ Tutorat.",
    },
    {
        nom: "École de technologie supérieure (ÉTS)",
        type: "Formation en cours",
        date: "Septembre 2026 — présent",
        titre: "Baccalauréat en génie logiciel",
    },
];

const Parcours = () => (
    <div className="parcours">
        <h1 id="parcours-title">Parcours</h1>
        <ol className="parcours-liste">
            {etapes.map((etape) => (
                <li className="parcours-etape" key={etape.nom}>
                    <div className="parcours-meta">
                        <span className="parcours-type">{etape.type}</span>
                        <p>{etape.date}</p>
                    </div>
                    <article>
                        <h2>{etape.nom}</h2>
                        <p className="parcours-titre">{etape.titre}</p>
                        {etape.description && <p className="parcours-description">{etape.description}</p>}
                    </article>
                </li>
            ))}
        </ol>
    </div>
);

export default Parcours;
