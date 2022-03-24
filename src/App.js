import { BrowserRouter, Routes, Route } from "react-router-dom";

import Filmes from "./componentes/pag1/Filmes";
import Horarios from "./componentes/pag2/Horarios";
import Sessao from "./componentes/pag3/Sessao";

export default function App(){

    return(
        <BrowserRouter>
            <header className="Topo">
                <h1>CINEFLEX</h1>
            </header> 
            <Routes>
                <Route path="/" element={<Filmes/>}/>
                <Route path="/filme/:filmeId" element={<Horarios/>}/>
                <Route path="/sessao/:sessaoId" element={<Sessao/>}/>
            </Routes>
        </BrowserRouter>
    )
}