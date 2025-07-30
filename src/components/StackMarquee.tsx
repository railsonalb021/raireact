import TranslatedText from './TranslatedText' // ajuste o caminho conforme seu projeto

const techs = [
  { name: 'Nuxt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TailwindCSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Eslint', icon: 'https://cdn.simpleicons.org/eslint/4B32C3' },
  { name: 'Node JS', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
]

export default function StackMarquee(){
  return (
    <div className="relative mt-10 w-full overflow-hidden border-t border-gray-800 bg-black">
      <div className="flex items-center justify-center whitespace-nowrap py-6">
        {techs.map(tech => (
          <div key={tech.name} className="mx-6 flex items-center gap-2 text-white">
            <img src={tech.icon} alt={tech.name} className="size-6" />
            <TranslatedText textKey={tech.name} />
          </div>
        ))}
      </div>
    </div>
  )
}
