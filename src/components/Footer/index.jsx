import './style.css'

export const Footer = (props) => {
    return (
        <footer className={props.theme ? "dark-footer" : ""}>
            <div className={props.theme ? "limitar-secao div-footer dark-footer" : "limitar-secao div-footer"} >
                <img src="src\assets\logo.png" alt="Nossa Logo" />
                <p>
                    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.
                </p>

                <div className="icons-footer">
                    <img src="src\assets\facebook.png" alt="logo-facebook" />
                    <img src="src\assets\twitter.png" alt="logo-twitter" />
                    <img src="src\assets\linkedin.png" alt="logo-linkedin" />
                    <img src="src\assets\dribble.png" alt="logo-dribble" />
                    <img src="src\assets\behance.png" alt="logo-behance" />
                    <img src="src\assets\google-plus.png" alt="logo-google-plus" />
                </div>

                <p>
                    Copyright 2022 <span><a href="https://github.com/iuritorres" target="_blank">Iuri Torres</a> & <a href="https://github.com/Ingridyoshida" target="_blank">Ingrid Yoshida</a></span>
                </p>
            </div>
        </footer>
    )
};

