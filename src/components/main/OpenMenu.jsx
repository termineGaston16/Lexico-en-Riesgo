import { Link } from "react-router-dom";
import "../../css/openMenu.css"

export default function OpenMenu(props){
    return(
        <aside className="aside-OpenMenu">
            <button className="aside-button-OpenMenu" onClick={props.function}>Continuar</button>
            <Link className="aside-link-button-OpenMenu" to={"/elegir-categoria"}><button className="aside-button-OpenMenu">Elegir Nueva Categoria</button></Link>
            <Link className="aside-link-button-OpenMenu" to={"/"}><button className="aside-button-OpenMenu">Salir al Menú Principal</button></Link>
        </aside>
    )
}