import { createContext, useEffect, useState } from "react";
import { getCategories } from "../firebase/firebase";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    const [categories, setCategories] = useState(null);

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
    const getRandomWorld = (category) => {
        if (!categories) return;

        if (category === "todos") {
            const listAllWorld = categories.map((category, index) => category[index].types)
            return listAllWorld;
        }
    }

    if(!categories) return (<p>Obteniendo datos...</p>)

    return (
        <CategoriesContext.Provider value={{ categories, setCategories, generateCategories, getRandomWorld }}>
            {children}
        </CategoriesContext.Provider>
    );
}
