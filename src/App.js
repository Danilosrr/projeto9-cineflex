import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topo from "./componentes/Topo";
import Filmes from "./componentes/pag1/Filmes";
import Horarios from "./componentes/pag2/Horarios";
import Sessao from "./componentes/pag3/Sessao";

export default function App(){

    return(
        <BrowserRouter>
            <Topo/>
            <Routes>
                <Route path="/" element={<Filmes/>}/>
                <Route path="/filme" element={<Horarios/>}/>
                <Route path="/sessao" element={<Sessao/>}/>
            </Routes>
        </BrowserRouter>
    )
}