import TranslatedText from '../components/TranslatedText'

function Footer(){
  return (
    <nav className="mt-44 bg-black p-6 text-white">
      <div className="flex items-center justify-center">
        <TranslatedText textKey='footer' className="-mt-9 cursor-pointer font-mono text-lg font-extralight transition-all duration-300 ease-in-out hover:text-blue-500"></TranslatedText>
      </div>
    </nav>
  )
}

export default Footer
