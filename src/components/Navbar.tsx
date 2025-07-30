import { Link } from 'react-router-dom'
import TranslatedText from '../components/TranslatedText'

function Navbar(){
  return (
    <nav className="bg-black p-6 text-white">
      <div>
        <TranslatedText textKey='mec.dev' className="cursor-pointer pl-7 font-mono text-xl font-extralight transition-all duration-300 ease-in-out hover:text-blue-500 lg:text-base"></TranslatedText>
      </div>
      <div className="flex items-center justify-end">
        <ul className="-mt-7 flex space-x-4 pr-9 font-mono text-xl lg:text-sm">
          <Link to="/">
            <TranslatedText textKey='home' className='cursor-pointer transition-all duration-300 ease-out hover:text-blue-500' /></Link>
          <TranslatedText textKey='about' className='cursor-pointer transition-all duration-300 ease-out hover:text-blue-500' />
          <Link to="/projetos">
            <TranslatedText textKey='projects' className='cursor-pointer transition-all duration-300 ease-out hover:text-blue-500' /></Link>
          <TranslatedText textKey='contact' className='cursor-pointer transition-all duration-300 ease-out hover:text-blue-500' />
        </ul>
      </div>
      <div className='mt-5 overflow-hidden whitespace-nowrap border-t border-gray-800' />
    </nav>
  )
}

export default Navbar
