import { Slideshow } from '../components/Slideshow'
import TranslatedText from '../components/TranslatedText'

function ProjectPage(){
  return (
    <section className="flex flex-col justify-between bg-black px-8 py-12 font-mono text-white">
      <div className="mt-10 text-center">
        <TranslatedText textKey='aboutme' className="mb-1 text-lg font-bold text-blue-500" />
        <div style={{ marginTop: 40 }}>
          <Slideshow />
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <div className="mt-6 text-center md:mt-0 md:text-left">
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
