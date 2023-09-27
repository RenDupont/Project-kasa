import { useParams } from "react-router-dom";
import Classes from '../../styles/logement/LogementDetails.module.css';
import Dropdown from "./Dropdown";
import logement from "../../data/logements.json";

function LogementDetails() {
    const {id} = useParams(); 
    const Logement = logement.find((it) => it.id === id)

    return (
        <section className={Classes.kasaLogementDetails}>
            <img className={Classes.kasaLogementDetails_carousel} src={Logement.cover} alt={Logement.title}></img>
            <div className={Classes.kasaLogementDetails_title}>
                <h1>{Logement.title}</h1>
                <div className={Classes.kasaLogementDetails_host}>
                    <p>{Logement.host.name}</p>
                    <img src={Logement.host.picture} alt={Logement.host.name} />
                </div>
            </div>
            <h2>{Logement.location}</h2>
            <div className={Classes.kasaLogementDetails_tags}>
                {Logement.tags.map((it) => (
                    <div key={it} item={it}>{it}</div>
                ))}
            </div>
            <div className={Classes.kasaLogementDetails_details}>
                <Dropdown title="Description" description={Logement.description} />
                <Dropdown title="Equipement" description={Logement.equipments} />
            </div>
        </section>
    );
}

export default LogementDetails;