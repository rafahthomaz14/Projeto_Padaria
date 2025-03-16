import { useState } from "react"
import { FaCartPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
export default function Header() {

    const [menuVisivel, setMenuVisivel] = useState(false)
    const [modoAtivo, setModoAtivo] = useState(false)
    // Abrindo e fechando o menu
    const toggleMenu = () => {
        setMenuVisivel(!menuVisivel)
    };

    //modo dark lite
    const Modo = () => {
        setModoAtivo(!modoAtivo)
    }

    return (
        <>
            <div className="flex  bg-gray-600  w-full h-18 drop-shadow-lg items-center ">

                {/* Menu de hamburger */}
                <button className="block md:hidden p-7" onClick={toggleMenu} >
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                </button>

                {/* Logo + Icone Carrinho */}
                <div className="flex justify-between w-full items-center">
                    <div className="logo md:p-7">
                        <h2 className="text-2xl font-bold text-gray-100">Padaria Delicia</h2>
                    </div>

                    {/* input de pesquisa */}
                    <div className="pesquisa hidden lg:flex w-80 h-full bg-gray-100 p-1 rounded items-center">
                        <FaSearch className=" ml-1" />
                        <input
                            type="text"
                            placeholder="Olá, posso te ajudar?"
                            className="ml-2 w-full"
                        />
                    </div>

                    {/* Criar botao do modo */}
                    <div className="modo-dark">
                        <div className="card w-15 h-5 bg-gray-400 rounded">

                        </div>
                    </div>

                    <div className="menu flex items-center justify-end lg:p-5">

                        {/* Quando estiver na tela grande aparece os menu */}
                        <div className="hidden md:flex space-x-5">
                            <div className="User p-5">
                                <FaUserAlt color="white" size={30} className="ml-8" />
                                <p className="text-gray-100 font-bold">Minha conta</p>
                            </div>
                            <div className="Pedidos p-5">
                                <IoDocumentText color="white" size={30} className="ml-11" />
                                <p className="text-gray-100 font-bold">Meus Pedidos <span>0</span></p>
                            </div>
                        </div>

                        <div className="carrinho p-5">
                            <FaCartPlus color="white" size={30} className="ml-5" />
                            <p className="text-gray-100 font-bold">Carrinho <span>0</span></p>
                        </div>

                    </div>
                </div>


            </div>

            {/* Menu após a state ficar true */}
            <div className={`${menuVisivel ? 'show' : 'hidden'} md:hidden`}>
                <div className="card-menu bg-gray-800 w-full">
                    <div className="conteudo-menu flex flex-col">
                        <a href="#" className="hover:bg-gray-500 text-gray-100 w-full flex justify-center p-3">Minha Conta</a>
                        <a href="#" className="hover:bg-gray-500 text-gray-100 w-full flex justify-center p-3" >Meus Pedidos</a>
                    </div>

                </div>
            </div>

        </>

    )
}