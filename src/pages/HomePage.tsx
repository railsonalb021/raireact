import minhaImagem from '../assets/profile.png';

const HomePage = () => {
    return (
      <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-500 text-xl font-mono pt-20">mec.dev</h1>
        <h2 className="text-white font-mono">frontend developer</h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <img src={minhaImagem} alt="Railson Albino" className="rounded-full w-48 h-32 mb-4" />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 lg:pt-20'>
      <div className='flex flex-col items-start pl-10'>
        <h1 className='text-blue-500 pl-24 pb-3 font-mono'>my skills</h1>
        <p className='text-white font-mono'>my skills are developing projects <br></br> in vue, nuxt, typescript and tailwind</p>
      </div>

      <div className='flex flex-col items-center pl-10'>
        <h1 className='text-blue-500 pr-5 pb-3 font-mono'>about me</h1>
        <p className='text-white font-mono'>I study computer science, but I work as a web <br></br> development intern, I'm 22 years old</p>
      </div>

      <div className='flex flex-col items-center pl-10'>
        <h1 className='text-blue-500 pr-5 pb-3 font-mono'>my next steps</h1>
        <p className='text-white font-mono'>now, I'm learning to develop a project <br></br> in react with typescript.</p>
      </div>
      </div>

      </div>   
    );
  };
  
  export default HomePage;
  