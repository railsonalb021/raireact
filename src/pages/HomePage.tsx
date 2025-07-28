import minhaImagem from '../assets/profile.png'
import TranslatedText from '../components/TranslatedText'

function HomePage(){
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <TranslatedText textKey="mec.dev" className="pt-20 font-mono text-xl text-blue-500" />
        <TranslatedText textKey="frontenddevloper" className="font-mono text-white" />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <img src={minhaImagem} alt="Railson Albino" className="mb-4 h-32 w-48 rounded-full" />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 lg:pt-20'>
        <div className='flex flex-col items-start pl-10'>
          <TranslatedText textKey="myskills" className='pb-3 pl-24 font-mono text-blue-500' />
          <TranslatedText textKey="myskillstext" className='font-mono text-white' />
        </div>

        <div className='flex flex-col items-center pl-10'>
          <TranslatedText textKey="aboutme" className='pb-3 pr-5 font-mono text-blue-500' />
          <TranslatedText textKey='aboutmetext' className='font-mono text-white' />
        </div>

        <div className='flex flex-col items-center pl-10'>
          <TranslatedText textKey='nextsteps' className='pb-3 pr-5 font-mono text-blue-500' />
          <TranslatedText textKey="nextstepstext" className='font-mono text-white' />
        </div>
      </div>

    </div>
  )
}

export default HomePage
