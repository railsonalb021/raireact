import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Typewriter } from 'react-simple-typewriter'
import minhaImagem from '../assets/profile.png'
import TranslatedText from '../components/TranslatedText'

function HomePage(){
  const { t } = useTranslation()
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* <TranslatedText textKey="mec.dev" className="pt-20 font-mono text-2xl text-blue-500 lg:text-xl" />
        {/* <TranslatedText textKey="frontenddevloper" className="font-mono text-xl text-white" /> */}
        <div className="p-10 text-2xl text-blue-500">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono"
          >
            <Typewriter
              words={[t('mec.dev'), t('frontenddevloper')]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.span>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <img src={minhaImagem} alt="Railson Albino" className="mb-4 h-32 w-48 rounded-full" />
      </div>

      <div className='grid grid-cols-1 pt-20 lg:grid-cols-3 lg:pt-20'>
        <div className='flex flex-col items-center pb-10 pl-10 lg:items-start lg:pb-0'>
          <TranslatedText textKey="myskills" className='mr-5 pb-3 font-mono text-xl text-blue-500 lg:mr-0 lg:pl-24 lg:text-base' />
          <TranslatedText textKey="myskillstext" className='font-mono text-white' />
        </div>

        <div className='flex flex-col items-center pb-10 pl-10 lg:pb-0'>
          <TranslatedText textKey="aboutme" className='pb-3 pr-5 font-mono text-xl text-blue-500 lg:text-base' />
          <TranslatedText textKey='aboutmetext' className='font-mono text-white' />
        </div>

        <div className='flex flex-col items-center pl-10'>
          <TranslatedText textKey='nextsteps' className='pb-3 pr-5 font-mono text-xl text-blue-500 lg:text-base' />
          <TranslatedText textKey="nextstepstext" className='font-mono text-white' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
