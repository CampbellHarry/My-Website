export default function Projects() {
    function ProjectCard({title, description, link, image, technology, type}: any) {
        return (
          <div className="boxbg rounded-xl 2 md:min-h-[11.5rem] flex-wrap w-full h-full relative shinytop p-6 flex flex-col gap-4 uppop">  
            <div className='flex flex-col relative w-[100%] '>
                <div className="w-full h-full relative">
                    <img src={image} alt={title} className='h-full w-full'/>
                </div>
              <div className='flex relative items-center justify-between'>
                <h3 className="text-xl font-semibold text-white px-1.5 py-1">{title}</h3>
                {type === 'Completed' ? (
                    <span className="bg-green-700 text-white px-2 py-1 mt-2 rounded text-sm">
                        {type}
                    </span>
                ) : (
                    <span className="bg-yellow-700 text-white px-2 py-1 mt-2 rounded text-sm">
                        {type}
                    </span>
                )}
              </div>
            </div>
            <p className="text-gray-300 text-sm px-1.5">{description}</p>
            <div className="flex flex-wrap gap-2 px-1.5">
                {technology.map((tech: string) => (
                  <span key={tech} className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 px-1.5">
                {link !== '' ? (
                    <a href={link} className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                        Visit {title}
                    </a>
                ) : (
                    null
                )}
            </div>
          </div>
        )
      }

    return(
        <div className="flex flex-col mt-12 w-full">
            <h1 className="font-medium text-white text-3xl mb-12">My Projects</h1>
            <div className="flex flex-col items-top justify-center md:flex-row gap-5 w-full">
                <ProjectCard 
                    title="HProjects"
                    description="HProjects is a platform for incident management and project management. It is a platform that allows users to create projects, assign tasks, and track the progress of the project. With access control and real time team collaboration, HProjects is the perfect tool for managing projects."
                    link="https://hprojects.hdev.uk"
                    type="Completed"
                    technology={['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'GSAP', 'Convex', 'AWS']}
                    image="/Screenshot 2024-09-09 140118.png"
                />
                <ProjectCard 
                    title="HSpace"
                    description="HSpace is a platform for developers to connect, share their work and apply to jobs in real time."
                    link=""
                    type="In Progress"
                    technology={['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'GSAP', 'Convex', 'AWS']}
                    image="/photo_2024-09-11_19-57-53.jpg"
                />
        </div>
        </div>
    )
}