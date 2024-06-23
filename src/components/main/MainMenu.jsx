import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const HowToPlay = lazy(() => import("./HowToPlay"));

export default function MainMenu() {
    const [howToPlayContent, setHowToPlayContent] = useState(false);

    const handleClick = () => {
         setHowToPlayContent(prevState => !prevState);
    }


    return (
        <main>
            <h3>Léxico en Riesgo</h3>
            <h6>Juego by Kda/Nova 2024</h6>

            <section>
                <Link to={"/elegir-categoria"}><button>Play</button></Link>
                <button onClick={handleClick}>Cómo jugar</button>
            </section>

            <Suspense fallback={<div>Loading...</div>}>
                {howToPlayContent && <HowToPlay handleClick={handleClick} />}
            </Suspense>
        </main>
    );
}
