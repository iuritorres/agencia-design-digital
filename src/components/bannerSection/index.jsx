import './style.css'

export const BannerSection = (props) => {
    return (
        <section className="banner-section">
            <div className={props.theme ? "banner-section-img-div dark-image-background" : "banner-section-img-div"}>
                    <img src="src\assets\banner.png" alt="man" />
                </div>

                <div className="banner-section-content">
                    <div className="banner-section-text">
                        <p>BRANDING / UI / UX / TECNOLOGIA</p>
                        <h2>Agência de Branding</h2>
                        <span>e design digital</span>
                    </div>
                </div>
        </section>
    )
};

