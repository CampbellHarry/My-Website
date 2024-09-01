"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname(); 
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const contactdropper = () => {
        setIsContactOpen(true);
    };

    const closeContact = () => {
        setClosing(true);
        const element = document.getElementById("sliderr");
        if (element) {
            element.classList.add("closer");
        }
        setTimeout(() => {
            setIsContactOpen(false);
            setClosing(false);
        }, 300);
    };

    const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).id === "clickerouter") {
            closeContact();
        }
    };

    const mobileopener = () => {
        const mobiler = document.getElementById("mobiler");
        if (mobiler) {
            mobiler.classList.remove("hidden");
        }
    };

    const closemobiler = () => {
        const mobiler = document.getElementById("mobiler");
        if (mobiler) {
            mobiler.classList.add("hidden");
        }
    };

    return (
        <>
        <div className="bg-zinc-950 w-full fixed hidden h-full z-[100000000000]" id="mobiler">
            <div className="flex flex-col justify-end top-0 fixed items-end pr-5 pt-4 w-full text-neutral-100/60"><p onClick={closemobiler} className="cursor-pointer">X</p></div>
            <div className="flex flex-col justify-center relative items-center w-full text-neutral-100/60">
            <a href="/" className={`hover:text-neutral-50 flex transition-all relative cursor-pointer h-12 items-center flex-row gap-2 ${pathname === '/' && "underline"}`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
                                    <p>Home</p>
                                </a>
                                <a href="/projects" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13C20.0929 13 21.1175 13.2922 22 13.8027V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13.3414C13.1203 20.3744 13 19.7013 13 19C13 15.6863 15.6863 13 19 13ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z"></path></svg>
                                    Projects
                                    {pathname === '/projects' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/work" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 19H14V6.00003L20.3939 8.74028C20.7616 8.89786 21 9.2594 21 9.65943V19H23V21H1V19H3V5.6499C3 5.25472 3.23273 4.89659 3.59386 4.73609L11.2969 1.31251C11.5493 1.20035 11.8448 1.314 11.9569 1.56634C11.9853 1.63027 12 1.69945 12 1.76941V19Z"></path></svg>
                                    Work
                                    {pathname === '/work' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
            </div>
        </div>
        <header className="w-full md:flex sticky top-0 z-20 mt-12 max-w-fit sm:px-2 items-center justify-center  dropintime">
            <div className="relative h-full">
                    <div className="mx-auto w-full h-full  md:min-w-[900px] md:max-w-[900px] px-4 pb-[20px] pt-6 text-lg md:px-16">
                        <div className="w-full flex justify-between items-center px-5 py-5 bg-zinc-800 border-zinc-600/40 rounded-full h-12 border">
                            <div className="flex flex-row justify-between w-full text-neutral-100/60">
                                <div className="h-12 items-center hover:text-zinc-50 cursor-pointer md:hidden flex transition-all" onClick={mobileopener}>
                                    <svg className="h-5 flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z"></path></svg>
                                </div>
                                <a href="/" className={`hover:text-neutral-50 hidden md:flex transition-all relative cursor-pointer h-12 items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
                                    <p>Home</p>
                                    {pathname === '/' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/projects" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 hidden md:flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13C20.0929 13 21.1175 13.2922 22 13.8027V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13.3414C13.1203 20.3744 13 19.7013 13 19C13 15.6863 15.6863 13 19 13ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z"></path></svg>
                                    Projects
                                    {pathname === '/projects' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/work" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 hidden md:flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 19H14V6.00003L20.3939 8.74028C20.7616 8.89786 21 9.2594 21 9.65943V19H23V21H1V19H3V5.6499C3 5.25472 3.23273 4.89659 3.59386 4.73609L11.2969 1.31251C11.5493 1.20035 11.8448 1.314 11.9569 1.56634C11.9853 1.63027 12 1.69945 12 1.76941V19Z"></path></svg>
                                    Work
                                    {pathname === '/work' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a onClick={contactdropper} className="hover:text-neutral-50 text-neutral-100/60 relative transition-all cursor-pointer h-12 flex items-center gap-2">
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM22 21H13V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21Z"></path></svg>
                                    <p>Contact</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isContactOpen && (
                <div className="fixed z-100 w-full h-full top-0 bg-neutral-800/20 flex justify-center items-center" id="clickerouter" onClick={handleOuterClick}>
                <div className="fixed z-100 w-[400px] h-[210px] bg-zinc-800 rounded-lg p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="sliderr">
                    <div className="flex p-2 w-full justify-between">
                    <p className="font-medium text-neutral-100">Hi! You are able to contact me from:</p>
                        <button onClick={closeContact} className="text-white">X</button>
                    </div>
                    <div className="flex w-full flex-col gap-2 mt-3 text-neutral-100">
                        <div className="flex w-full flex-col gap-2">
                        <a href="https://github.com/CampbellHarry" target="_blank" className="gap-2 w-full bg-zinc-900 hover:bg-zinc-700 p-2 rounded-lg flex flex-row hover:text-neutral-50 transition-all">
                        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                        GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/harry-campbell-75ab83250/" target="_blank" className="gap-2 w-full hover:bg-zinc-700 bg-zinc-900 p-2 rounded-lg flex flex-row hover:text-neutral-50 transition-all">
                        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                        LinkedIn
                        </a>
                        <a target="_blank" href="mailto:hello@hdev.uk" className="gap-2 w-full bg-zinc-900 hover:bg-zinc-700 p-2 rounded-lg flex flex-row hover:text-neutral-50 transition-all">
                        <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 13H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19.5 21.75L16.855 23.1406L17.3601 20.1953L15.2202 18.1094L18.1775 17.6797L19.5 15L20.8225 17.6797L23.7798 18.1094L21.6399 20.1953L22.145 23.1406L19.5 21.75Z"></path></svg>
                        Email
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}
