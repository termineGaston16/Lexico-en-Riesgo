import { useContext, useState } from "react"
import { CategoriesContext } from "../../context/categories";
import "../../css/tecladoVisual.css"

export default function TecladoVisual() {

    const { checkKey, teclado } = useContext(CategoriesContext)
   
    return (
        <>
            <div className="div-TecladoVisual">
                {teclado.map((tecla, index) => (
                    <button className="div-button-TecladoVisual" onClick={()=>{checkKey(tecla.toUpperCase())}} key={index}>{tecla}</button>
                ))}
            </div>
        </>
    )
}