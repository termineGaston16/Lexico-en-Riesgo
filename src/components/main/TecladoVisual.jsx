import { useContext, useState } from "react"
import { CategoriesContext } from "../../context/categories";

export default function TecladoVisual() {

    const { checkKey } = useContext(CategoriesContext)
    const [teclado, setTeclado] = useState(Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)))

    return (
        <>
            <div>
                {teclado.map((tecla, index) => (
                    <button onClick={()=>{checkKey(tecla.toUpperCase())}} key={index}>{tecla}</button>
                ))}
            </div>
        </>
    )
}