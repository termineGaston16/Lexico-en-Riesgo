import { useContext, useEffect } from "react"
import { CategoriesContext } from "../../context/categories"
import { Link } from "react-router-dom"
import "../../css/chooseToCategory.css"


export default function ChooseToCategory() {

    const { generateCategories, setFail, setTeclado } = useContext(CategoriesContext)

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("lifePlayer", JSON.stringify(100))
        setFail(false)
        setTeclado(Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)))
    }, [])

    return (<>
        <section className="section-ChooseToCategory">
            <header className="section-header-ChooseToCategory">
                <Link to={"/"} className="section-header-link-ChooseToCategory">
                    <button className="section-header-link-button-ChooseToCategory">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </button>
                </Link>
                <h4 className="section-header-h4-ChooseToCategory">Elige una Categoría</h4>
            </header>


            <main className="section-main-ChooseToCategory">
                <ul className="section-main-ul-ChooseToCategory">
                    {generateCategories().map((categoria, index) => (
                        <Link className="section-main-ul-link-ChooseToCategory" key={index} to={`/categoria-elegida/${categoria}`}>
                            <li className="section-main-ul-link-li-ChooseToCategory">
                                <button className="section-main-ul-link-li-button-ChooseToCategory">{categoria}</button>
                            </li>
                        </Link>
                    ))}
                    <Link className="section-main-ul-link-ChooseToCategory" to={`/categoria-elegida/todos`}>
                        <li className="section-main-ul-link-li-ChooseToCategory">
                            <button className="section-main-ul-link-li-button-ChooseToCategory">Todos</button>
                        </li>
                    </Link>
                </ul>
            </main>

        </section>
    </>)
}