import './style.css'

export const Card = (props) => {
    return (
        <div className={props.theme ? "card dark-background-card" : "card"}>
            <span className={props.theme ? "dark-text-card" : ""} >{props.data}</span>
            <h3 className={props.theme ? "dark-text-card-title" : ""} >{props.titulo}</h3>
            <h4 className={props.theme ? "dark-text-card" : ""} >{props.empresa}</h4>

            <p className={props.theme ? "dark-text-card" : ""} >{props.paragrafo}</p>
        </div>
    )
};

