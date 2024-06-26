import { Link } from "react-router-dom";
import "../../css/winOrLose.css"

export default function WinOrLose(props){
    return(<>
        <aside className="section-WinOrLose">
            <h2 className="section-h2-WinOrLose">{props.title}</h2>
            <span className="section-span-WinOrLose">La palabra era: {props.palabraDescubierta}</span>
            <Link className="section-link-WinOrLose" to={"/"}><button className="section-link-button-WinOrLose">Volver al Menú</button></Link>
        </aside>
    </>)
}