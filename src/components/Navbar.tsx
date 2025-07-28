import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Navbar(){
  const { t } = useTranslation()
  return (
    <nav className="border-b-2 bg-black p-6 text-white">
      <div>
        <h1 className="cursor-pointer font-mono text-xl font-extralight transition-all duration-300 ease-in-out hover:text-blue-500">mec.dev</h1>
      </div>
      <div className="flex items-center justify-end">
        <ul className="-mt-7 flex space-x-4 font-mono text-sm">
          <li><Link className="transition-all duration-300 ease-in-out hover:text-blue-500" to="/">{t('home')}</Link></li>
          <li><a href="#about" className="transition-all duration-300 ease-in-out hover:text-blue-500">{t('about')}</a></li>
          <li><Link className="transition-all duration-300 ease-in-out hover:text-blue-500" to="/projetos">{t('projects')}</Link></li>
          <li><a href="#contact" className="transition-all duration-300 ease-in-out hover:text-blue-500">{t('contact')}</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
