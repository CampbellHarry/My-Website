"use client"
import Header from "../components/header/header";
import "../styles/main.css"
import Expander from "../components/expanders/expander";

export default function Home() {
  return (
    <>
  <div className="bg-gradient-to-tr from-zinc-900 via-zinc-950 to-zinc-900 w-full h-full relative pb-4 m-0 text-zinc-400 bg-no-repeat">
    <div className="flex w-full items-center flex-col">
    <Header />
    <section className="flex w-full h-screen max-h-[1000px] mt-[-11rem] md:max-w-[1850px] mb-12 flex-col items-center justify-center gap-2">
      <div className="flex items-center flex-col h-full justify-center w-full boxshadower shadow-b-xl rounded-b-[5rem] md:rounded-b-[12.5rem] boxover px-[10rem] py-28 xs:gap-6 md:gap-10 lg:gap-6">
        <h1 className="font-bold text-center text-8xl z-30  bg-gradient-to-r from-neutral-400 via-white to-neutral-400 py-6 text-transparent bg-clip-text">Harry Campbell</h1>
        <h2 className="font-semibold text-xl w-max bg-gradient-to-r from-neutral-400 via-white to-neutral-400 py-1 text-transparent bg-clip-text">The security focused software engineer for you.</h2>
      </div>
    </section>
    <main className="flex min-h-screen flex-col items-center w-full">
    <div className="mx-auto w-full max-w-[900px] px-4 text-lg sm:px-12 md:px-16">
    <div className="w-full flex flex-col md:px-5 md:py-5">
    <div className="bg-teal-500/20 border border-teal-400/20 rounded-md text-zinc-50 mb-10 p-2">
          <h2 className="font-semibold">I'm open to work!</h2>
      </div>
      <div className="flex flex-row md:items-center items-start gap-5">
        <img src="/1720299869628.jpeg" className="h-[45px] w-[45px] rounded-full sm:h-[80px] sm:w-[80px]"></img>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl md:text-2xl text-zinc-100">Harry Campbell</h1>
          <p className="font-mono font-semibold md:block hidden">Lead Full Stack Developer based in the UK</p>
          <p className="font-mono font-semibold md:hidden text-sm">Developer from England</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <p>I am a software developer based in the uk. I have 3 years of experience working in web development and security engineering <Expander texttoexpand=" with my experience I enjoy developing high performance, secure and user focused websites like HProjects" />
        .</p>
        <p>
          Over those years, I have worked with a variety of different technologies
          <Expander texttoexpand=" including TypeScript, JavaScript, Node.JS, Next.JS, React, Tailwind, MySQL, Convex, Git, AWS, Vercel, Railway" />. in a variety of different projects <Expander texttoexpand=" including HProjects, HCyber" />.
        </p>
        <p>At heart I am a full stack developer <Expander texttoexpand="( taking ideas from the drawingboard and transforming them into prestigious products in all aspects is my speciality )" /> with a sharp eye for good design and expertise in parts of the stack including frontend, backend and databases.</p>
        <p>You may know me as the founder of <a href="https://www.linkedin.com/company/hdevgroup/" className="underline weigh underline-offset-4 decoration-2 font-semibold hover:text-neutral-50 transition-all">Hdev Group</a><Expander texttoexpand="; a startup that I have created to make solutions for software that needs updating / creating." /> I have been working on it since early 2023 while balancing college <Expander texttoexpand="( In college I achived a first year distinction in Information technology )" /> and other jobs <Expander texttoexpand="including my IT support job at chipmunk chip shop" />.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full mt-10 md:underline underline-offset-4">
        <a href="https://github.com/CampbellHarry" target="_blank" className="gap-2 w-full bg-zinc-800 md:bg-transparent p-2 rounded-lg flex flex-row hover:text-neutral-50 transition-all">
        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
        GitHub
        </a>
        <a href="https://www.linkedin.com/in/harry-campbell-75ab83250/" target="_blank" className="gap-2 w-full bg-zinc-800 md:bg-transparent p-2 rounded-lg flex flex-row hover:text-neutral-50 transition-all">
        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
        LinkedIn
        </a>
        <a target="_blank" href="mailto:hello@hdev.uk" className="gap-2 w-full bg-zinc-800 md:bg-transparent p-2 rounded-lg flex flex-row hover:text-neutral-50 transition-all">
        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 13H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19.5 21.75L16.855 23.1406L17.3601 20.1953L15.2202 18.1094L18.1775 17.6797L19.5 15L20.8225 17.6797L23.7798 18.1094L21.6399 20.1953L22.145 23.1406L19.5 21.75Z"></path></svg>
          Email
        </a>
      </div>
      <div className="flex flex-col gap-2 mt-10 w-full">
        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex flex-col bg-zinc-800 w-full md:w-[360px] rounded-lg p-3">
            <div className="flex flex-row gap-2">
              <img src="https://media.licdn.com/dms/image/D4E03AQHVOQmOMUpKxQ/profile-displayphoto-shrink_400_400/0/1721862688194?e=1728518400&v=beta&t=P9XsTpcPxbEsJProZs6ib_oWYiAVzwN-UEtuNvhmBds" className="h-[45px] w-[45px] rounded-full sm:h-[45px] sm:w-[45px]"></img>
              <div className="flex flex-col">
                <h1 className="font-semibold text-md text-zinc-400">Kian Gentry</h1>
                <p className="text-xs">Technical Designer | Software Developer | Producer | Student</p>
              </div>
            </div>
            <p className="mt-2">I've got to say, Harry has to be one of the brightest minds I've worked with in my entire career. His pure dedication and passion for his own work as well as his contributions towards other peoples projects is honestly outstanding. I can not recommend him enough for any team in need of a new member.</p>
          </div>
          <div className="flex flex-col bg-zinc-800 w-full md:w-[360px] rounded-lg p-3">
            <div className="flex flex-row gap-2">
              <img src="https://media.licdn.com/dms/image/C5603AQEXZJ4I0OkW8g/profile-displayphoto-shrink_200_200/0/1585838213914?e=1728518400&v=beta&t=Vhc_qiyXCSHs89leP0NWB51YJxFK_4gMA4d2VxrqUqQ" className="h-[45px] w-[45px] rounded-full sm:h-[45px] sm:w-[45px]"></img>
              <div className="flex flex-col">
                <h1 className="font-semibold text-md text-zinc-400">Konrad Gardy</h1>
                <p className="text-xs">Customer Service Deputy Manager at Letsproo sp zoo</p>
              </div>
            </div>
            <p className="mt-2">Harry is one of the best people I have ever worked with. His excellent work ethic, unstoppable dedication and mind full of great ideas make him a unique person that is extremely hard to find. He always finds new ideas and ways to optimize projects, constantly improves himself, and his hunger for knowledge can't be stopped. Harry is hands down a priceless addition to any project and organization he joins.</p>
          </div>
          <div className="flex flex-col bg-zinc-800 w-full rounded-lg p-3">
            <div className="flex flex-row gap-2">
              <img src="https://static.licdn.com/aero-v1/sc/h/13m4dq9c31s1sl7p7h82gh1vh" className="h-[45px] w-[45px] rounded-full sm:h-[45px] sm:w-[45px]"></img>
              <div className="flex flex-col">
                <h1 className="font-semibold text-md text-zinc-400">Finley Martin</h1>
                <p className="text-xs">Student | Programmer | Graphical Designer | Full Stack Developer.</p>
              </div>
            </div>
            <p className="mt-2">I have worked alongside Harry as a co-worker or under Harry on several projects over the time. I have not yet met a developer which matches the almost mythical title of "The 10x Developer" more than Harry. His drive to actually get stuff done is outstanding; often inspiring his team members to do the same. Harry's development skills are quite striking for his age. I can whole-heartedly vouch for his skills in problem solving and management.</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p>Want to get in touch? Send me an <a className="underline weigh underline-offset-4 decoration-2 font-semibold hover:text-neutral-50 transition-all" href="mailto:hello@hdev.uk">email</a>.</p>
      </div>
      </div>
      </div>
    </main>
    </div>
    </div>
    </>
  );
}
