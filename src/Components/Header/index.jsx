import { useState } from "react"
import { FaCartPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export default function Header() {
    return (
        <div className="flex  bg-gray-600  w-full h-18 shadow-lg items-center ">
            
            {/* Menu de hamburger */}
            <button className="block lg:hidden p-5" >
                <span className="block w-6 h-1 bg-white mb-1"></span>
                <span className="block w-6 h-1 bg-white mb-1"></span>
                <span className="block w-6 h-1 bg-white"></span>
            </button>

            {/* Logo + Icone Carrinho */}
            <div className="flex justify-between w-full items-center">
                <div className="logo md:p-40">
                    <h2 className="text-2xl font-bold text-gray-100">Padaria Delicia</h2>
                </div>

                <div className="menu flex items-center justify-end md:p-40">

                    {/* Quando estiver na tela grande aparece os menu */}
                    <div className="hidden lg:flex space-x-5">
                        <div className="carrinho p-5">
                            <FaUserAlt color="white" size={30} className="ml-8" />
                            <p className="text-gray-100 font-bold">Minha conta</p>
                        </div>
                        <div className="carrinho p-5">
                            <IoDocumentText color="white" size={30} className="ml-9" />
                            <p className="text-gray-100 font-bold">Meus Pedidos</p>
                        </div>
                    </div>

                    <div className="carrinho p-5">
                        <FaCartPlus color="white" size={30} className="ml-5" />
                        <p className="text-gray-100 font-bold">Carrinho <span>0</span></p>
                    </div>

                </div>
            </div>

        </div>
    )
}