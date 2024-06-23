import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories"

export default function Playing() {
    const { chooseCategory } = useParams();
    const { getRandomWorld } = useContext(CategoriesContext)

    return (<>
        <header>
            <button>Menu</button>
            <h2>{chooseCategory}</h2>

            
        </header>
    </>)
}