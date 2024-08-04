"use client"
import Header from "../../components/header/header";
import image from 'next/image';
import Expander from "../../components/expanders/expander";

export default function Home() {
return (
    <>
        <div className="bg-zinc-900 overflow-x-hidden text-zinc-400 bg-no-repeat">
            <Header />
            <main className="flex min-h-screen flex-col items-center w-full">
                <div className="mx-auto w-full max-w-[900px] px-4 text-lg sm:px-12 md:px-16">
                    <div className="w-full flex flex-col px-5 py-5">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-2xl text-zinc-100">Employment</h1>
                            <p className="font-mono font-semibold text-sm">
                                I have been fortunate enough to have worked with some incredible teams and companies. Here are some of the places I have worked.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 mt-10">
                            <div className="flex flex-col items-start  bg-zinc-800 w-full rounded-lg p-3">
                                <div className="flex flex-col justify-between w-full items-start">
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-zinc-400 text-sm">
                                            <a>Remote, England</a>
                                        </h1>
                                        <h1 className="text-zinc-400 text-sm">
                                            <p>May 2023 — Present</p>
                                        </h1>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-between w-full mt-3">
                                        <h1 className="text-zinc-100 font-semibold text-xl">
                                            <a>Lead Full Stack Developer <span className="text-zinc-500">at</span> Hdev Group</a>
                                        </h1>
                                        <div className="bg-teal-300 w-auto px-2 text-black rounded-xl text-sm">Founder</div>
                                    </div>
                                    <div className="mt-4 text-md">
                                        <p className="text-[16px]">I founded Hdev in 2023 to build advanced large scale open source applications to help assist myself and other developers and users to learn, use and build on the software we create. </p>
                                    </div>
                                    <div className="flex gap-2 flex-row items-start w-full mt-2 flex-wrap">
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            TypeScript
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            JavaScript
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Node.JS
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Next.JS
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            React
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Tailwind
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            MySQL
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Convex
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            GitHub
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Git
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            SEO
                                        </div>
                                    </div>
                                    <div className="mt-4 w-full items-center font-sans justify-center flex bg-gradient-to-r from-zinc-900/40 hover:from-zinc-300/40 cursor-pointer transition-all">
                                        <p>{`</> Show Contributions`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start  bg-zinc-800 w-full rounded-lg p-3">
                                <div className="flex flex-col justify-between w-full items-start">
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-zinc-400 text-sm">
                                            <a>On-Site, England</a>
                                        </h1>
                                        <h1 className="text-zinc-400 text-sm">
                                            <p>August 2023 — Present</p>
                                        </h1>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-between w-full mt-3">
                                        <h1 className="text-zinc-100 font-semibold text-xl">
                                            <a>IT Support <span className="text-zinc-500">&</span> Team Member <span className="text-zinc-500">at</span> Chipmunk</a>
                                        </h1>
                                    </div>
                                    <div className="mt-4 text-md">
                                        <p className="text-[16px]">At Chipmunk I maintain, debug and assist with software and hardware issues that arise from POS systems to networking. I also train new staff members on those systems and their main jobs too.</p>
                                    </div>
                                    <div className="flex gap-2 flex-row items-start w-full mt-2 flex-wrap">
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            SEO
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Networks
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Hardware
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Team-Work
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Training
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Customer Service
                                        </div>
                                        <div className="rounded-lg border px-1 py-0.5 text-sm border-neutral-600">
                                            Management
                                        </div>
                                    </div>
                                    <div className="mt-4 w-full items-center font-sans justify-center flex bg-gradient-to-r from-zinc-900/40 hover:from-zinc-300/40 cursor-pointer transition-all">
                                        <p>{`</> Show Contributions`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
)
}