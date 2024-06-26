import { Link } from "react-router-dom";

export default function OpenMenu(props){
    return(
        <aside>
            <button onClick={props.function}>Continuar</button>
            <Link to={"/elegir-categoria"}><button>Elegir Nueva Categoria</button></Link>
            <Link to={"/"}><button>Salir al Menú Principal</button></Link>
        </aside>
    )
}