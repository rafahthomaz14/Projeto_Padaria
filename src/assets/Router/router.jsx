import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login/idex"
import Cadastro from "../Pages/Cadastrar"
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />

            </Routes>
        </BrowserRouter>
    )
}