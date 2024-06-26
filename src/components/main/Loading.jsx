import "../../css/loading.css"

export default function Loading(props) {
    return (<>
        <main className="main-Loading">
            <aside className="main-aside-Loading">
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </aside>
            <span className="main-span-Loading">{props.mensaje}</span>
        </main>
    </>)
}