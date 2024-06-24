import { Link } from "react-router-dom";

export default function Win(props){
    return(<>
        <aside>
            <h2>¡Has ganado!</h2>
            <span>La palabra era: {props.palabraDescubierta}</span>
            <Link to={"/"}><button>Volver al Menú</button></Link>
        </aside>
    </>)
}