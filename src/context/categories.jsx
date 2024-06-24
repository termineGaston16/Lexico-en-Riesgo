import { createContext, useEffect, useState } from "react";
import { getCategories } from "../firebase/firebase";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    const [categories, setCategories] = useState(null);
    const [wordRandom, setWordRandom] = useState(null);
    const [hiddenWord, setHiddenWord] = useState(null);
    const [lifePlayer, setLifePlayer] = useState(100);

    useEffect(() => {
        getCategories()
            .then(data => setCategories(data))
    }, [])

    /* Genera una lista dinámica de las categorias */
    const generateCategories = () => {
        if (!categories) return;

        const listOfCategories = categories.map(category => category.id);
        return listOfCategories;
    };

    /* Obtén una palabra según la categoría escogida */
    const getRandomWord = (categoryElegida) => {
        if (!categories) return;

        const palabraAAdivinar = localStorage.getItem("palabraAAdivinar")
        const palabraEnigma = localStorage.getItem("palabraEnigma")
        const lifePlayer = JSON.parse(localStorage.getItem("lifePlayer"))
        setLifePlayer(lifePlayer)
        if (palabraAAdivinar && palabraEnigma) {
            setWordRandom(palabraAAdivinar)
            setHiddenWord(palabraEnigma)
            return;
        }


        if (categoryElegida === "todos") {
            const listAll = categories.reduce((accumulator, current) => {
                return accumulator.concat(current.types);
            }, []);

            const numerRandom = Math.floor(Math.random() * (listAll.length + 1))
            const palabraRandom = (listAll[numerRandom]).toUpperCase()
            const palabraEnigma = (palabraRandom.split("").map(char => char === " " ? " " : "-").join(""))

            setWordRandom(palabraRandom)
            setHiddenWord(palabraEnigma)
            localStorage.setItem("palabraAAdivinar", palabraRandom)
            localStorage.setItem("palabraEnigma", palabraEnigma)


        } else {

            const listOfWordsAccordingToCategory = categories.filter(category => category.id === categoryElegida);
            const numerRandom = Math.floor(Math.random() * (listOfWordsAccordingToCategory[0].types.length + 1))
            const palabraRandom = (listOfWordsAccordingToCategory[0].types[numerRandom]).toUpperCase()
            const palabraEnigma = (palabraRandom.split("").map(char => char === " " ? " " : "-").join(""))

            setWordRandom(palabraRandom)
            setHiddenWord(palabraEnigma)
            localStorage.setItem("palabraAAdivinar", palabraRandom)
            localStorage.setItem("palabraEnigma", palabraEnigma)
        }

        return;
    }

    /* Adivinar palabra según letra ingresada */
    const checkKey = (key) => {
        let palabraAAdivinar = localStorage.getItem("palabraAAdivinar");
        let palabraEnigma = localStorage.getItem("palabraEnigma");

        if (palabraAAdivinar.includes(key)) {
            let nuevaPalabraEnigma = palabraEnigma.split("");

            for (let i = 0; i < palabraAAdivinar.length; i++) {
                if (palabraAAdivinar[i] === key) {
                    nuevaPalabraEnigma[i] = key;
                }
            }

            nuevaPalabraEnigma = nuevaPalabraEnigma.join("");
            localStorage.setItem("palabraEnigma", nuevaPalabraEnigma);
            setHiddenWord(nuevaPalabraEnigma);
        } else {
            alert("letra incorrecta")

            const life = lifePlayer;
            const newLife = (life - 12.5)
            setLifePlayer(newLife)
            localStorage.setItem("lifePlayer", JSON.stringify(newLife))
            return;
        }
    };


    if (!categories) return (<p>Obteniendo datos...</p>)

    return (
        <CategoriesContext.Provider value={{ categories, wordRandom, hiddenWord, lifePlayer, setCategories, generateCategories, getRandomWord, checkKey }}>
            {children}
        </CategoriesContext.Provider>
    );
}
