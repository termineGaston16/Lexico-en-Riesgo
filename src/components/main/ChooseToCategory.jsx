import { useContext } from "react"
import { CategoriesContext } from "../../context/categories"
import { Link } from "react-router-dom"


export default function ChooseToCategory() {

    const { generateCategories } = useContext(CategoriesContext)

    return (<>
        <section>
            <header>
                <Link to={"/"}><button>volver</button></Link>
                <h4>Elige una Categoría</h4>
            </header>


            <main>
                <ul>
                    {generateCategories().map((categoria, index) => (
                        <Link key={index} to={`/categoria-elegida/${categoria}`}>
                            <li >
                                <button>{categoria}</button>
                            </li>
                        </Link>
                    ))}
                    <Link to={`/categoria-elegida/todos`}>
                        <li>
                            <button>Todos</button>
                        </li>
                    </Link>
                </ul>
            </main>

        </section>
    </>)
}