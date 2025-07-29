import { useTranslation } from 'react-i18next'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import imagembr from './assets/br.png'
import imagemusa from './assets/us.png'

function App(){
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Router>
      <Navbar />
      <div className="flex justify-end gap-2 px-4 py-2">
        <button type='button' onClick={() => changeLanguage('pt')} className="text-2xl transition-all duration-300 ease-out hover:scale-125">
          <img src={imagembr} alt="Portuguese" className="h-6 w-8 rounded-full" />
        </button>
        <button type='button' onClick={() => changeLanguage('en')} className="text-2xl transition-all duration-300 ease-out hover:scale-125">
        <img src={imagemusa} alt="estadosunidos" className="h-6 w-8 rounded-full" />
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
