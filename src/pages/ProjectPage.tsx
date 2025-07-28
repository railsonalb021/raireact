import { Link } from 'react-router-dom'
import TranslatedText from '../components/TranslatedText'

function ProjectPage(){
  return (
    <section className="flex flex-col justify-between bg-black px-8 py-12 font-mono text-white">
      <div className="mt-10 text-center">
        <TranslatedText textKey='myprojects' className="mb-1 text-lg font-bold text-blue-500" />
      </div>

      <div className="mt-28 flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <div className="mt-6 text-center md:mt-0 md:text-left">
            <TranslatedText textKey='mysitefood' className="mb-2 text-lg font-bold text-blue-500" />
            <p className="max-w-md text-sm leading-relaxed text-gray-300">
              I'm developing my website in Vue and Nuxt.
            </p>
            <p className="mt-3 text-xs italic text-gray-400">
              tech stack: vue, nuxt.js, typescript, tailwindcss.
            </p>
            <div className='w-52 pt-3 text-sm hover:text-blue-500'>
              <Link to="https://github.com/railsonalb021/Site-Food" target='_blank'>
                <p className="transition-all duration-300 ease-out">• repository on github</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <div className="ml-10 mt-6 text-center md:mt-3 md:text-left">
            <h3 className="mb-2 text-lg font-bold text-blue-500">website in react</h3>
            <p className="max-w-md text-sm leading-relaxed text-gray-300">
              I am currently developing this website in react.
            </p>
            <p className="mt-3 text-xs italic text-gray-400">
              tech stack: react, tailwindcss, typescript.
            </p>
            <div className='w-52 pt-3 text-sm hover:text-blue-500'>
              <Link to="https://github.com/railsonalb021/raireact" target='_blank'>
                <p className="transition-all duration-300 ease-out">• repository on github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
