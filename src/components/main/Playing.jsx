import { Suspense, lazy, useContext, useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories"
import Loading from "./Loading";
import lifeJugador from "../main/imgs/lifeJugador.png"
const TecladoVisual = lazy(() => import("./TecladoVisual"))
const WinOrLose = lazy(() => import("./WinOrLose"))
const OpenMenu = lazy(() => import("./OpenMenu"))
import "../../css/playing.css"


export default function Playing() {
    const { chooseCategory } = useParams();
    const { getRandomWord, hiddenWord, wordRandom, lifePlayer, fail, setFail } = useContext(CategoriesContext)
    const [winContent, setWinContent] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        getRandomWord(chooseCategory);

    }, [])

    useEffect(() => {
        if (!hiddenWord) return;
        if (hiddenWord.split("").every(letra => letra !== "-")) {
            setWinContent(true)
        }

    }, [hiddenWord])

    const openMenu = () => {
        setMenuOpen(prevState => !prevState)
    }

    return (<>
        <header className="header-Playing">
            <button onClick={openMenu} className="header-button-Playing">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>
            <h2 className="header-h2-Playing">{chooseCategory}</h2>
            <div className={`header-div-Playing ${fail ? 'fail-animation' : ''}`}>
                <div className="header-div-backgroundLife-Playing">
                    <div className="header-div-backgroundLife-life-Playing" style={{ width: lifePlayer + "%"}}></div>
                </div>
                <img className="header-div-img-Playing" src={lifeJugador} alt="life-jugador-img" />
            </div>
        </header>

        <main className="main-Playing">
            <p className="main-p-Playing">Palabra a Adivinar: <br /> <span className="main-span-Playing">{hiddenWord}</span> </p>

            <Suspense fallback={<Loading mensaje={"Cargando teclado..."} />}>
                <TecladoVisual />
            </Suspense>

            <Suspense fallback={<Loading mensaje={"Cargando..."} />}>
                {winContent && <div className="div-container-open"><WinOrLose title={"Has Ganado"} palabraDescubierta={wordRandom} /></div>}
                {lifePlayer <= 0 && <div className="div-container-open"><WinOrLose title={"Has Perdido"} palabraDescubierta={wordRandom} /></div>}
                {menuOpen && <div className="div-container-open"><OpenMenu function={openMenu} /></div>}
            </Suspense>

        </main>
    </>)
}

