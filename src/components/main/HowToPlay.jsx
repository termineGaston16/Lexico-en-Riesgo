export default function HowToPlay(props) {
   

    /*useEffect(() => {

        const changeUrl = () => {
            window.history.pushState({}, "", "/tutorial");
        };

        changeUrl(); // Ejecutar una vez al montar el componente

        // Definir el listener para limpiar el efecto
        window.addEventListener("popstate", changeUrl);

        return () => {
            // Limpiar el listener cuando el componente se desmonte
            window.removeEventListener("popstate", changeUrl);
            // Revertir el cambio en el historial del navegador
            window.history.back();
        };
    }, []);*/



    return (<>
        <aside>
            <header>
                <h5>¿Cómo jugar al juego de ahorcados?</h5>
                <button onClick={props.handleClick}>Volver</button>
            </header>

            <span>
                El juego de ahorcados es un divertido desafío de palabras donde tu objetivo es adivinar la palabra oculta
                antes de que se complete el dibujo del ahorcado. Sigue estos pasos para jugar:
            </span>
            <ol>
                <li><span>Inicio del Juego:</span> Para comenzar el juego deberá darle al botón Play en el menú principal y allí
                    elegir una categoría o sección específica. Dependiendo de la sección elegida, se generará la palabra a adivinar.
                </li>

                <li><span>Objetivo del Juego:</span> Tendrás <span>8 intentos</span> por cada palabra para poder
                    adivinar las letras perteneciente a la palabra elegida y según aciertes o no se te irá descontando las vidas.</li>

                <li><span>Victoria:</span> Si adivinas la palabra completa antes de perder los 8 intentos, ganarás automaticamente
                    la partida.</li>

                <li><span>Derrota:</span> Si gastas tus 8 intentos, date por muerto/a y acepta tu cruel destino.</li>
            </ol>
        </aside>
    </>)
}