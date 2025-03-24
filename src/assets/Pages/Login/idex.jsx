import { Link } from "react-router-dom"
import Logo from  '../../../../public/Logo.png'
export default function Login() {
    return (
        <div className="conteudo-login h-lvh bg-gray-950 flex flex-col justify-center items-center">
            {/* Logo */}
            <div className="logo flex justify-center -mt-25">
                <img src={Logo} alt="Imagem-logo" className=' w-[200px] md:w-[260px]' />
            </div>
            <h1 className="font-bold text-6xl text-gray-100 p-10">Login</h1>
            <div className="login flex flex-col  w-[90%] max-w-[800px]">
                <input type="text" className=" text-2xl focus:outline-none bg-gray-50 h-13 rounded p-3 mb-3" placeholder="Digite seu email" />
                <input type="password" className=" text-2xl focus:outline-none bg-gray-50 h-13 rounded p-3 mb-3" placeholder="***********" />
                <button className="h-13 bg-green-600 text rounded text-gray-100 text-2xl font-bold cursor-pointer hover:bg-green-800">Acessar</button>
            </div>

            <Link className='mt-5 text-2xl font-bold text-gray-400' to="/cadastro">
                Não possui uma conta? <span className="text-blue-400">Cadastre-se ! </span>
            </Link>
        </div>
    )
}