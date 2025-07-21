
  const Navbar = () => {
    return (
      <nav className="bg-black p-6 text-white border-b-2">
        <div>
            <h1 className="text-xl font-extralight hover:text-blue-500 ease-in-out transition-all duration-300 cursor-pointer font-mono">R</h1>
        </div>
        <div className="flex justify-end items-center">
            <ul className="flex space-x-4 text-sm font-mono -mt-7">
                <li><a href="#home" className="hover:text-blue-500 ease-in-out transition-all duration-300">home</a></li>
                <li><a href="#about" className="hover:text-blue-500 ease-in-out transition-all duration-300">about</a></li>
                <li><a href="#projects" className="hover:text-blue-500 ease-in-out transition-all duration-300">projects</a></li>
                <li><a href="#contact" className="hover:text-blue-500 ease-in-out transition-all duration-300">contact</a></li>
            </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;