import { useParams } from "react-router-dom";
import Classes from '../../styles/logement/LogementDetails.module.css';
import Dropdown from "./Dropdown";
import Carousel from './Carousel';
import logement from "../../data/logements.json";
import StarRating from "./RatingStar";

/*function LogementDetails() {
    const {id} = useParams(); 
    const Logement = logement.find((it) => it.id === id)

    return (
        <section className={Classes.kasaLogementDetails}>
            <Carousel images={Logement.pictures} />
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

export default LogementDetails;*/

function LogementDetails() {
    const {id} = useParams(); 
    const Logement = logement.find((it) => it.id === id)

    const values = [
        {
            "id": "1",
            "title": "Description",
            "description": Logement.description
        },
        {
            "id": "2",
            "title": "Equipement",
            "description": Logement.equipments
        }
    ];

    return (
        <section className={Classes.kasaLogementDetails}>
            <Carousel images={Logement.pictures} />
            <div className={Classes.kasaLogementDetails_title}>
                <h1>{Logement.title}</h1>
            </div>
            <h2>{Logement.location}</h2>
            <div className={Classes.kasaLogementDetails_tags}>
                {Logement.tags.map((it) => (
                    <div key={it} item={it}>{it}</div>
                ))}
            </div>
            <StarRating rating={Logement.rating} />
            <div className={Classes.kasaLogementDetails_host}>
                    <p>{Logement.host.name}</p>
                    <img src={Logement.host.picture} alt={Logement.host.name} />
                </div>
            <div className={Classes.kasaLogementDetails_details}>
                {values.map((item) =>(
                    <Dropdown key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default LogementDetails;