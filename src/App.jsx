import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/main/Loading";

// Importa los componentes con lazy
const MainMenu = lazy(() => import("./components/main/MainMenu"));
const ChooseToCategory = lazy(() => import("./components/main/ChooseToCategory"));
const Playing = lazy(() => import("./components/main/Playing"));

// Función para importar CategoriesProvider de manera dinámica
const CategoriesProvider = lazy(() => import("./context/categories").then(module => ({ default: module.CategoriesProvider })));

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading mensaje={"Cargando tutorial..."}/>}>
                <Routes>
                    <Route exact path={"/"} element={<MainMenu />} />
                    <Route exact path={"/elegir-categoria"} element={<CategoriesProvider><ChooseToCategory /></CategoriesProvider>} />
                    <Route exact path={"/categoria-elegida/:chooseCategory"} element={<CategoriesProvider><Playing /></CategoriesProvider>} />
                    <Route exact path={"*"} element={<h3>Error 404</h3>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}