"use client"
import Header from "../../components/header/header";
import image from 'next/image';
import Expander from "../../components/expanders/expander";

export default function Home() {
    const photoexpander = () => {
        const photoexpander = document.getElementById("photoexpander");
        const photoexpanderr = document.getElementById("photoexpanderr");
        photoexpanderr?.classList.remove("hidden")
        photoexpanderr?.classList.add("flex")
        photoexpander?.remove()

    }
return (
    <>
        <div className="bg-zinc-900 overflow-x-hidden text-zinc-400 bg-no-repeat">
            <Header />
            <main className="flex min-h-screen flex-col items-center w-full">
                <div className="mx-auto w-full max-w-[900px] px-4 text-lg sm:px-12 md:px-16">
                    <div className="w-full flex flex-col px-5 py-5">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-2xl text-zinc-100">Projects</h1>
                            <p className="font-mono font-semibold text-sm">
                                I have worked on multiple projects. Some as a hobby and some to build custom tools to solve my own pain points and others just to test my skills in large scale projects.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 mt-10">
                            <div className="flex flex-col items-start  bg-zinc-800 w-full rounded-lg p-3">
                                <div className="flex flex-row justify-between w-full items-start">
                                    <div className="flex flex-row gap-3  items-center">
                                        <h1 className="text-zinc-100 font-semibold text-xl">
                                            <a target="_blank" href="https://github.com/Hdev-Group/HProjects">HProjects</a>
                                        </h1>
                                        <div className="bg-teal-300 w-auto px-2 text-black rounded-xl text-sm">In Progress</div>
                                    </div>
                                    <div className="bg-zinc-900 rounded-lg w-auto h-auto">
                                        <img src="/logohprojects.png" className="h-[45px] w-[45px] rounded-full sm:h-[40px] sm:w-[40px]"></img>
                                    </div>
                                </div>
                                <div className="mt-1 w-[90%]">
                                    <p className="text-md font-medium">Custom project planning application with real-time updates, changelogs, chats, and more!</p>
                                    <p className="text-xs mt-2"><Expander texttoexpand="These statistics are estimations based on data we collected" /></p>
                                </div>
                                <div className="mt-2 w-full gap-3 flex flex-row justify-between">
                                    <div className="rouded-md flex flex-grow flex-col gap-1 rounded-lg bg-gradient-to-b from-zinc-900/40 px-3 py-2">
                                        <h4 className="text-xs text-zinc-400 uppercase">Visitors / MO (est)</h4>
                                        <p className="text-md text-zinc-300 font-semibold">+ 13K</p>
                                    </div>
                                    <div className="rouded-md flex flex-grow flex-col gap-1 rounded-lg bg-gradient-to-b from-zinc-900/40 px-3 py-2">
                                    <h4 className="text-xs text-zinc-400 uppercase">REG. Accounts (est)</h4>
                                        <p className="text-md text-zinc-300 font-semibold">+ 20k</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-end justify-end w-full">
                                    <a target="_blank" href="https://github.com/Hdev-Group/HProjects" className="flex flex-row items-center gap-1 justify-center hover:text-zinc-50 cursor-pointer transition-all">
                                        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                                        Visit GitHub
                                    </a>
                                </div>
                                <div className="mt-4 w-full py-2 items-center font-sans justify-center flex bg-gradient-to-r from-zinc-900/40 hover:from-zinc-300/40 cursor-pointer transition-all" onClick={photoexpander} id="photoexpander">
                                    <p className="text-sm font-semibold">{`</> View Photos`}</p>
                                </div>
                                <div className="hidden text-sm w-full flex-col gap-2 mt-4" id="photoexpanderr">
                                            <div className="flex bg-zinc-900/30 text-neutral-400 py-1 gap-3 flex-col px-2 rounded-md">
                                                <p className="font-semibold text-lg">Task Changelog</p>
                                                <img src="/changelogs.png"></img>
                                            </div>
                                            <div className="flex bg-zinc-900/30 text-neutral-400 py-1 gap-3 flex-col px-2 rounded-md">
                                                <p className="font-semibold text-lg">Direct Messages</p>
                                                <img src="/chathprojects.png"></img>
                                            </div>
                                            <div className="flex bg-zinc-900/30 text-neutral-400 py-1 gap-3 flex-col px-2 rounded-md">
                                                <p className="font-semibold text-lg">Task Page</p>
                                                <img src="/taskholder.png"></img>
                                            </div>
                                            <div className="flex bg-zinc-900/30 text-neutral-400 py-1 gap-3 flex-col px-2 rounded-md">
                                                <p className="font-semibold text-lg">Quick Hover</p>
                                                <img src="/tasksquickcheck.png"></img>
                                            </div>
                                            <div className="flex bg-zinc-900/30 text-neutral-400 py-1 gap-3 flex-col px-2 rounded-md">
                                                <p className="font-semibold text-lg">Detailed Task Page</p>
                                                <img src="/tasksshowandquickchat.png"></img>
                                            </div>
                                            <div className="flex bg-zinc-900/30 text-neutral-400 py-1 gap-3 flex-col px-2 rounded-md">
                                                <p className="font-semibold text-lg">Detailed Task Page</p>
                                                <img src="/tasksshowandquickchat.png"></img>
                                            </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start  bg-zinc-800 w-full rounded-lg p-3">
                                <div className="flex flex-row justify-between w-full items-start">
                                    <div className="flex flex-row gap-3  items-center">
                                        <h1 className="text-zinc-100 font-semibold text-xl">
                                            <a target="_blank" href="https://github.com/Hdev-Group/HCyber">HCyber</a>
                                        </h1>
                                        <div className="bg-teal-300 w-auto px-2 text-black rounded-xl text-sm">In Progress</div>
                                    </div>
                                    <div className="bg-zinc-900 rounded-lg w-auto h-auto">
                                        <img src="/hcybericon.png" className="h-[45px] w-[45px] rounded-lg sm:h-[40px] sm:w-[40px]"></img>
                                    </div>
                                </div>
                                <div className="mt-3 w-[90%]">
                                    <p>Cyber security / IT training website with CV scanning, Moderation, Payment processing and much more under the hood.</p>
                                    <p className="text-xs mt-2"><Expander texttoexpand="These statistics are estimations based on data we collected" /></p>
                                </div>
                                <div className="mt-2 w-full gap-3 flex flex-row justify-between">
                                    <div className="rouded-md flex flex-grow flex-col gap-1 rounded-lg bg-gradient-to-b from-zinc-900/40 px-3 py-2">
                                        <h4 className="text-xs text-zinc-400 uppercase">Visitors / MO (est)</h4>
                                        <p className="text-md text-zinc-300 font-semibold">+ 36K</p>
                                    </div>
                                    <div className="rouded-md flex flex-grow flex-col gap-1 rounded-lg bg-gradient-to-b from-zinc-900/40 px-3 py-2">
                                    <h4 className="text-xs text-zinc-400 uppercase">REG. Accounts (est)</h4>
                                        <p className="text-md text-zinc-300 font-semibold">+ 40k</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-end justify-end w-full">
                                    <a target="_blank" href="https://github.com/Hdev-Group/HCyber" className="flex flex-row items-center gap-1 justify-center hover:text-zinc-50 cursor-pointer transition-all">
                                        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                                        Visit GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
);
}
