import { useRouter } from "next/navigation";
import { title } from "process";

export default function Projects() {
            const router = useRouter();
        
            function ProjectCard({ title, description, link, image, technology, type, colour }: any) {
                return (
                  <div onClick={() => link && router.push(link)} className="boxbg rounded-xl cursor-pointer md:max-w-[45%] overflow-hidden w-full  md:min-h-[11.5rem] flex-wrap h-full relative shinytop flex flex-col gap-4 uppop hover:shadow-lg hover:scale-105 transition-transform duration-300 eas</div>e-in-out">
            
            {/* Main Card Content */}
            <div className="flex flex-col relative w-[100%] h-80">
              
              {/* Image Section */}
              <div className="w-full h-full relative">
                <img src={image} alt={title} className="h-auto rounded-md w-full object-cover" />
              </div>
              
              {/* Title and Status Overlay */}
              <div className="flex items-center absolute bottom-0 w-full bg-neutral-900/20 backdrop-blur-md justify-between px-4 py-2">
                <h3 className={`${colour === "light" ? "sm:text-black text-white" : "text-white"} text-xl font-semibold px-1.5 py-1`}>{title}</h3>
                {type === 'Completed' ? (
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-sm">
                    {type}
                  </span>
                ) : (
                  <span className="bg-yellow-700 text-white px-2 py-1 rounded text-sm">
                    {type}
                  </span>
                )}
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-md">
              <h3 className="text-xl font-semibold text-white py-1">{title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-3">{description}</p>
                
                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {technology.map((tech: string) => (
                    <span key={tech} className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link Button */}
                {link && (
                    <div className="flex flex-row items-center">
                        <a
                            href={link}
                            className="text-black bg-white w-auto pr-8 pl-3 py-1 rounded text-sm font-semibold transition-all duration-300 relative"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        Visit {title} <span className="text-black font-bold text-md absolute ml-2">→</span>
                        </a>
                    </div>
                )}
              </div>
            </div>
          </div>
        );
      }
      

    return(
        <div className="flex flex-col mt-12 w-full">
            <h1 className="font-medium text-white text-3xl mb-12">My Projects</h1>
            <div className="flex flex-col items-top flex-wrap justify-start overflow-hidden md:flex-row gap-5 w-full">
                {[
                    {
                        title: "HProjects",
                        description: "HProjects is a platform for incident management and project management. It is a platform that allows users to create projects, assign tasks, and track the progress of the project. With access control and real time team collaboration.",
                        link: "https://hprojects.hdev.uk",
                        type: "Completed",
                        colour: "dark",
                        technology: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'GSAP', 'Convex', 'AWS'],
                        image: "/Screenshot 2024-10-25 165816.png"
                    },
                    {
                        title: "Textuality",
                        description: "Textuality is a CMS platform for bloggers and writers. It is a platform that allows users to create, edit and publish articles. With access control and real time team collaboration.",
                        type: "In Progress",
                        colour: "dark",
                        technology: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Convex', 'AWS'],
                        image: "/Screenshot 2024-10-25 172201.png"
                    },
                    {
                        title: "HSpace",
                        description: "HSpace is a platform for developers to connect, share their work and apply to jobs in real time.",
                        link: "",
                        colour: "dark",
                        type: "In Progress",
                        technology: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Convex', 'AWS'],
                        image: "/Untitled design (7).png"
                    },
                    {
                        title: "ScamStopper.uk",
                        description: "ScamStopper.uk is a platform for users to report scams and frauds. It is a platform that allows users to report scams and frauds and view the latest scams and frauds reported by other users.",
                        link: "",
                        colour: "light",
                        type: "In Progress",
                        technology: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Convex', 'AWS'],
                        image: "/scamstopper3.png"
                    }
                ].map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}