import { useTranslation } from 'react-i18next'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import imagembr from './assets/br.png'
import imagemusa from './assets/us.png'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StackMarquee from './components/StackMarquee'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function AppWrapper(){
  return (
    <Router>
      <App />
    </Router>
  )
}

function App(){
  const { i18n } = useTranslation()
  const location = useLocation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-end gap-2 px-4">
        <button type="button" onClick={() => changeLanguage('pt')} className="pr-1 text-2xl transition-all duration-300 ease-out hover:scale-125">
          <img src={imagembr} alt="Portuguese" className="rounded-full lg:h-6 lg:w-8" />
        </button>
        <button type="button" onClick={() => changeLanguage('en')} className="pr-12 text-2xl transition-all duration-300 ease-out hover:scale-125">
          <img src={imagemusa} alt="English" className="rounded-full lg:h-6 lg:w-8" />
        </button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {location.pathname === '/' && <StackMarquee />}

      <Footer />
    </>
  )
}

export default AppWrapper
