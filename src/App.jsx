import './App.css'
import Header from './Components/Header'
import Logo from '../public/Logo.png'
import Banner from './Components/Banner'
export default function App() {
  return (
    <>
      <Header />
        {/* Logo */}
        <div className="logo flex justify-center ">
          <img src={Logo} alt="Imagem-logo" className='mt-5 w-[260px] md:w-[360px]' />
        </div>
        <Banner />
    </>
  )
}


