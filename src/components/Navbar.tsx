import TranslatedText from '../components/TranslatedText'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <nav className="border-b-2 bg-black p-6 text-white">
      <div>
        <TranslatedText textKey='mec.dev' className="cursor-pointer font-mono text-xl font-extralight transition-all duration-300 ease-in-out hover:text-blue-500"></TranslatedText>
      </div>
      <div className="flex items-center justify-end">
        <ul className="-mt-7 flex space-x-4 font-mono text-sm">
        <Link to="/">
        <TranslatedText textKey='home' className='hover:text-blue-500 ease-out transition-all duration-300 cursor-pointer' /></Link>
        <TranslatedText textKey='about' className='hover:text-blue-500 ease-out transition-all duration-300 cursor-pointer' />
        <Link to="/projetos">
        <TranslatedText textKey='projects' className='hover:text-blue-500 ease-out transition-all duration-300 cursor-pointer' /></Link>
        <TranslatedText textKey='contact' className='hover:text-blue-500 ease-out transition-all duration-300 cursor-pointer' />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
