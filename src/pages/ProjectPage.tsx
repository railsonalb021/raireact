const ProjectPage = () => {
    return (
      <section className="flex flex-col justify-between text-white px-8 py-12 font-mono bg-black">
      <div className="text-center mt-10">
        <h2 className="text-blue-500 text-lg font-bold mb-1">my projects</h2>
        <p className="text-sm text-gray-300">frontend developer</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-40 space-y-10">
        <div className="flex flex-col items-center md:flex-row md:space-x-12">    
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-lg font-bold text-blue-500 mb-2">my website</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
            I'm developing my website in Vue and Nuxt.
            </p>
            <p className="text-xs mt-3 text-gray-400 italic">
              tech stack: vue, nuxt.js, typescript, tailwindcss.
            </p>
            <div className='text-sm pt-3 hover:text-blue-500 w-52'>
            <a href='https://github.com/railsonalb021/Meu-Site-Pessoal' target='_blank'>• repository on github</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <div className="mt-6 md:mt-3 text-center md:text-left ml-10">
            <h3 className="text-lg font-bold text-blue-500 mb-2">website in react</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
            I am currently developing this website in react.
            </p>
            <p className="text-xs mt-3 text-gray-400 italic">
              tech stack: react, tailwindcss, typescript.
            </p>
            <div className='text-sm pt-3 hover:text-blue-500 w-52'>
            <a href='https://github.com/railsonalb021/raireact' target='_blank'>• repository on github</a>
            </div>
          </div>
        </div>
      </div>
    </section> 
    );
  };
  
  export default ProjectPage;
  