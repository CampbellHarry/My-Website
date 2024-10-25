import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  useEffect(() => {
    const uppop = document.querySelectorAll(".uppop");
    uppop.forEach((uppop, index) => {
      gsap.fromTo(
        uppop,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: .35,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: uppop,
            start: 'top 80%',
          },
        }
      );
    });
  })
    function SkillCard({title, description, logo, colour }: any) {
      return (
        <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-1/5 px-2 py-2">
        <div className="flex flex-row gap-4">
          <div className={`bg-[${colour}]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src={logo} alt={title}  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </div>
        </div>
      )
      }
    return(
      <div className="flex flex-col flex-wrap mt-12 ">
  <h1 className="font-medium text-white text-3xl mb-12">My Skills</h1>
  <div className="flex md:flex-row flex-col flex-wrap items-top justify-left gap-5 w-full">
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#3178C6]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/react-2.svg" alt="React"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">React</h3>
          <p className="text-gray-300 text-sm">JavaScript Libary</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#000000]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex  items-center justify-center">
            <Image src="/logos/nextjs-icon.svg" alt="Next.js"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">Next.js</h3>
          <p className="text-gray-300 text-sm">React Framework</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#3178C5]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/typescript.svg" alt="TypeScript"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">TypeScript</h3>
          <p className="text-gray-300 text-sm">Programming Language</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#0EA5E9]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/tailwind.svg" alt="Tailwind"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">Tailwind</h3>
          <p className="text-gray-300 text-sm">Utility-First CSS</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#339933]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/nodejs-icon.svg" alt="Node.js"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">Node.js</h3>
          <p className="text-gray-300 text-sm">JavaScript Runtime</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#EE342F]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/symbol-color.svg" alt="Convex"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">Convex</h3>
          <p className="text-gray-300 text-sm">Database</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#000000]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/mysql-logo.svg" alt="MySQL"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">MySQL</h3>
          <p className="text-gray-300 text-sm">Database</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#F7DF1E]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/aws.svg" alt="AWS"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">AWS</h3>
          <p className="text-gray-300 text-sm">Cloud</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#F7DF1E]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">JavaScript</h3>
          <p className="text-gray-300 text-sm">Programming Language</p>
        </div>
      </div>
    </div>
    <div className="boxbg rounded-xl hover:border-neutral-600 hover:bg-neutral-500/20 border border-transparent transition-all w-full max-w-1/4 md:w-1/4 min-w-1/4 px-2 py-2">
      <div className="flex flex-row gap-4">
        <div className={`bg-[#F05032]/30 p-1 rounded-lg items-center flex justify-center`}>
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            <Image src="/logos/Git_icon.svg.png" alt="Git"  height={40} width={40} objectFit="contain" />
          </div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
          <h3 className="text-xl text-white">Git</h3>
          <p className="text-gray-300 text-sm">Version Control System</p>
        </div>
      </div>
    </div>

  </div>
  </div>
    )
}