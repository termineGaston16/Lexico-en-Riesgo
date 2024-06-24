import { Suspense, lazy, useContext, useEffect, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories"
const TecladoVisual = lazy(() => import("./TecladoVisual"))
const Win = lazy(() => import("./Win"))


export default function Playing() {
    const { chooseCategory } = useParams();
    const { getRandomWord, hiddenWord, wordRandom, lifePlayer } = useContext(CategoriesContext)
    const [winContent, setWinContent] = useState(false)
    const {idLife} = useId();

    useEffect(() => {
        getRandomWord(chooseCategory);  
        
    }, [])

    useEffect(() => {
        if (!hiddenWord) return;
        if (hiddenWord.split("").every(letra => letra !== "-")){
            setWinContent(true)
        }

    }, [hiddenWord])

    return (<>
        <header>
            <Link to={"/"}><button>Menu</button></Link>
            <h2>{chooseCategory}</h2>
            <input type="range" min="0" max="100" value={lifePlayer} name="" id={idLife} readOnly/>
            <label htmlFor={idLife}>{lifePlayer}% - Vida</label>
        </header>

        <main>
            <span>Palabra a Adivinar: <br /> {hiddenWord} </span>

            <Suspense fallback={"cargando teclado..."}>
                <TecladoVisual />
            </Suspense>

            <Suspense fallback={"Loading..."}>
                {winContent && <Win palabraDescubierta={wordRandom} />}
            </Suspense>

        </main>
    </>)
}

