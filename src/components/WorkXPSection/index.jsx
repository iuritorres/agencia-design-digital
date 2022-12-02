import { Card } from "../Card/";
import './style.css'

export const WorkXPSection = (props) => {
    return (
        <section className={props.theme ? "dark-background-workxp workxp-section" : "workxp-section"}>
            <div className="limitar-secao div-workxp-section">
                <div className={props.theme ? "work-content-div dark-text-workxp" : "work-content-div"}>
                    <h2>Experiências De Trabalho</h2>

                    <hr />

                    <p>
                        Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                        Sites e Marketing Digital, nos empenhamos diariamente para entregar
                        resultados que tragam impacto aos nossos clientes.
                    </p>
                </div>

                <div className="cards-div">
                    <Card
                        theme={props.theme} 
                        data="JUNHO 2012 - 2016"
                        titulo="Web Designer"
                        empresa="empresa"
                        paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    />

                    <Card
                        theme={props.theme} 
                        data="AGOSTO 2016 - 2019"
                        titulo="Product Designer"
                        empresa="E Corp."
                        paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    />

                    <Card
                        theme={props.theme} 
                        data="FEVEREIRO 2019 - 2021"
                        titulo="Digital Consulting"
                        empresa="Arasaka Inc."
                        paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    />
                </div>
            </div>
        </section>
    )
};

