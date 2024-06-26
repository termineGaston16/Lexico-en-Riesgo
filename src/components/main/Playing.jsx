import { Suspense, lazy, useContext, useEffect, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories"
const TecladoVisual = lazy(() => import("./TecladoVisual"))
const WinOrLose = lazy(() => import("./WinOrLose"))
const OpenMenu = lazy(()=> import("./OpenMenu"))


export default function Playing() {
    const { chooseCategory } = useParams();
    const { getRandomWord, hiddenWord, wordRandom, lifePlayer } = useContext(CategoriesContext)
    const [winContent, setWinContent] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { idLife } = useId();

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
        <header>
            <button onClick={openMenu}>Menu</button>
            <h2>{chooseCategory}</h2>
            <input type="range" min="0" max="100" value={lifePlayer} name="" id={idLife} readOnly />
            <label htmlFor={idLife}>{lifePlayer}% - Vida</label>
        </header>

        <main>
            <span>Palabra a Adivinar: <br /> {hiddenWord} </span>

            <Suspense fallback={"cargando teclado..."}>
                <TecladoVisual />
            </Suspense>

            <Suspense fallback={"Loading..."}>
                {winContent && <WinOrLose title={"Has Ganado"} palabraDescubierta={wordRandom} />}
                {lifePlayer <= 0 && <WinOrLose title={"Has Perdido"} palabraDescubierta={wordRandom} />}
                {menuOpen && <OpenMenu function={openMenu}/>}
            </Suspense>

        </main>
    </>)
}

