import Header from '../../Components/Header'
import Logo from '../../../../public/logo.png'
import Banner from '../../Components/Banner'
import Produto from '../../Components/Produto'
import Bebidas from '../../Components/Bebidas'
import Categorias from '../../Components/Categorias'
import Footer from '../../Components/Footer'
export default function Home() {
    return (
        <>
            <Header />

            {/* Logo */}
            <div className="logo flex justify-center ">
                <img src={Logo} alt="Imagem-logo" className='mt-5 w-[260px] md:w-[360px]' />
            </div>

            {/* Container para guardar as categorias */}
            <div className="conteudo-categoria flex justify-center">
                <div className="categorias mt-8  w-[90%] max-w-[900px]">
                    <div className="texto flex justify-between">
                        <h1 className="font-bold text-gray-100 md:text-2xl">Categorias</h1>
                        <h1 className='text-gray-300 font-bold lg:hidden'>Ver mais</h1>
                    </div>
                    <Categorias />
                </div>
            </div>


            {/* Container para guardar o banner */}
            <div className="conteudo-banner flex justify-center">
                <div className="banner mt-8  w-[90%] max-w-[900px]">
                    <h1 className="font-bold text-gray-100 md:text-2xl">Mais Vendidos</h1>
                    <Banner />
                </div>
            </div>



            {/* Container para guardar o prduto */}
            <div className="conteudo-produto flex justify-center">
                <div className="produtos mt-8  w-[90%] max-w-[900px]">
                    <div className="texto flex justify-between">
                        <h1 className="font-bold text-gray-100 md:text-2xl">Nossos Produtos</h1>
                        <h1 className='text-gray-300 font-bold lg:hidden'>Ver mais</h1>
                    </div>
                    <Produto />
                </div>
            </div>

            {/* Container para guardar as Bebidas */}
            <div className="conteudo-bebidas flex justify-center">
                <div className="bebidas mt-8  w-[90%] max-w-[900px]">
                    <div className="texto flex justify-between">
                        <h1 className="font-bold text-gray-100 md:text-2xl">Bebidas</h1>
                        <h1 className='text-gray-300 font-bold md:hidden'>Ver mais</h1>
                    </div>
                    <Bebidas />
                </div>
            </div>

            <Footer />
        </>
    )
}


