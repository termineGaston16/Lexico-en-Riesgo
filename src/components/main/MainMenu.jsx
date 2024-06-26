import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "../../css/mainMenu.css"

const HowToPlay = lazy(() => import("./HowToPlay"));
import logoPrincipal from "./imgs/logoPrincipal.png"
import Loading from "./Loading";

export default function MainMenu() {
    const [howToPlayContent, setHowToPlayContent] = useState(false);

    const handleClick = () => {
        setHowToPlayContent(prevState => !prevState);
    }


    return (
        <main className="main-MainMenu">
            <Link to={"/"} className="main-link-MainMenu"><img src={logoPrincipal} alt="logo principal de la página" className="main-link-img-MainMenu" /></Link>
            <h6 className="main-h6-MainMenu">Juego by <span className="main-h6-span-MainMenu">Kda/Nova 2024</span></h6>

            <section className="main-section-MainMenu">
                <Link to={"/elegir-categoria"} className="main-section-link-MainMenu">
                    <button className="main-section-link-button-MainMenu">Play</button>
                </Link>
                <button onClick={handleClick} className="main-section-button-MainMenu">Cómo jugar</button>
            </section>

            <Suspense fallback={<Loading mensaje={"Cargando tutorial..."} />}>
                    {howToPlayContent && <div className="div-container-open"><HowToPlay handleClick={handleClick} /></div>}
            </Suspense>
        </main>
    );
}
