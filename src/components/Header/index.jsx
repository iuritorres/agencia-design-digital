import './style.css'

export const Header = (props) => {
    return (
        <header className={props.theme ? "dark-theme-header" : ""}>
            <div className="limitar-secao">
                <img src="src\assets\logo.png" alt="M-logo" />

                <button onClick={props.changeTheme} className={props.theme ? "theme-button-border" : ""}>
                    <img src={props.theme ? "src\\assets\\sun.png" : "src\\assets\\moon.png"} alt="mudar-tema" />
                </button>
            </div>
        </header>
    )
};