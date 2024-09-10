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
    function SkillCard({title, description, years, skilllevel }: any) {
        return (
          <div className="boxbg rounded-xl lg:w-1/4 md:min-h-[11.5rem] flex-wrap w-full h-full relative shinytop p-6 flex flex-col gap-4 uppop">  
            <div className='flex relative w-[100%] items-center'>
              <div className='flex relative items-center'>
                <div className='border-l h-12 border-dashed border-neutral-400/60'/>
                <div className='border-t h-9 w-full border-dashed absolute border-neutral-400/60'/>
                <div className='border-b border-dashed absolute border-neutral-400/60'/>
                <h3 className="text-xl font-semibold text-white px-1.5 py-1">{title}</h3>
                <div className='border-b w-full h-9 border-dashed absolute border-neutral-400/60'/>
                <div className='border-r h-12 border-dashed border-neutral-400/60'/>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{description}</p>
            <div className="flex flex-wrap gap-2">
                <span  className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                  {years} Year{years > 1 ? 's' : ''}
                </span>
                {skilllevel && (
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                    {skilllevel}
                  </span>
                )}
            </div>
          </div>
        )
      }
    return(
        <div className="flex flex-col mt-12 w-full">
<h1 className="font-medium text-white text-3xl mb-12">My Skills</h1>
<div className="flex  flex-row flex-wrap items-top justify-center md:flex-row gap-5 w-full">
<SkillCard
  title="React"
  description="I use React to build user interfaces and web applications."
  years={[2]}
  skilllevel="Advanced"
/>
<SkillCard
  title="TypeScript"
  description="I use TypeScript to write strongly-typed JavaScript applications."
  years={[2]}
  skilllevel="Advanced"
/>
<SkillCard
  title="JavaScript"
  description="I use JavaScript to create dynamic and interactive web content."
  years={[3]}
  skilllevel="Advanced"
/>
<SkillCard
  title="Python"
  description="I use Python for scripting, automation, and data analysis."
  years={[3]}
  skilllevel="Advanced"
/>
<SkillCard
  title="SQL"
  description="I use SQL to manage and query relational databases."
  years={[2]}
  skilllevel="Intermediate"
/>
<SkillCard
  title="Security"
  description="I use security best practices to protect information and systems."
  years={[3]}
  skilllevel="Advanced"
/>
<SkillCard
  title="Tailwind"
  description="I use Tailwind to rapidly style web pages with utility-first CSS."
  years={[2]}
  skilllevel="Advanced"
/>
<SkillCard
  title="Node.js"
  description="I use Node.js to build server-side applications and APIs."
  years={[3]}
  skilllevel="Advanced"
/>
<SkillCard
  title="Next.js"
  description="I use Next.js to create optimized, server-rendered React applications."
  years={[2]}
  skilllevel="Advanced"
/>
<SkillCard
  title="AWS"
  description="I use AWS to deploy, scale, and manage cloud-based applications."
  years={[1]}
  skilllevel="Beginner"
/>
<SkillCard
  title="Convex"
  description="I use Convex to store my data in a database."
  years={[1]}
  skilllevel="Advanced"
/>
<SkillCard
  title="MySQL"
  description="I use MySQL to manage relational databases in my projects."
  years={[2]}
  skilllevel="Intermediate"
/>


</div>
</div>
    )
}