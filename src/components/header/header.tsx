"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname(); 
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);


    const contactdropper = () => {
        setIsContactOpen(true);
    };


    const mobileopener = () => {
        if (isMobileOpen === true){
            closemobiler();
            return;
        }
        const mobiler = document.getElementById("mobiler");
        const body = document.querySelector("body");
        if (mobiler && body) {
            mobiler.classList.add("flex");
            mobiler.classList.add("slidein");
            mobiler.classList.remove("hidden");
            body.classList.add("overflow-hidden");
            setIsMobileOpen(true);
        }
    };

    const closemobiler = () => {
        const mobiler = document.getElementById("mobiler");
        const body = document.querySelector("body");
        if (mobiler) {
            mobiler.classList.remove("slidein");
            mobiler.classList.add("sliderup");
            setTimeout(() => {
                mobiler.classList.remove("sliderup");
                mobiler.classList.remove("flex");
                mobiler.classList.add("hidden");
                body?.classList.remove("overflow-hidden");
                setIsMobileOpen(false);
            }, 500);
        }
    };

    return (
        <>
        <div className="bg-zinc-950 w-full fixed hidden h-full z-50 overflow-hidden" id="mobiler">
            <div  className="flex flex-col justify-end z-50 top-0 fixed items-end pr-5 pt-4 w-full text-neutral-100/60"><p onClick={closemobiler} className="cursor-pointer">X</p></div>
            <div className="flex flex-col justify-center relative items-center w-full text-neutral-100/60">
            <a href="/" className={`hover:text-neutral-50 flex transition-all relative cursor-pointer h-12 items-center flex-row gap-2`}>
                <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
                <p>Home</p>
                {pathname === '/' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
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
            <a href="/blog" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 flex items-center flex-row gap-2`}>
                <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"></path></svg>                Blogs
                {pathname === '/blog' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
            </a>
            <a href="/#contact" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 flex items-center flex-row gap-2`}>
                <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM22 21H13V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21Z"></path></svg>
                Contact
                {pathname === '/#contact' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
            </a>
            </div>
        </div>
        <header className="w-full :flex sticky top-0 z-50 mt-12 max-w-fit sm:px-2 items-center justify-center dropintime">
            <div className="relative h-full">
                    <div className="mx-auto w-full h-full md:min-w-[900px] sm:min-w-[550px]  md:max-w-[900px] px-4 pb-[20px] pt-6 text-lg md:px-16">
                        <div className="w-full flex justify-between items-center px-5 py-5 backdrop-blur-md headerbackground border-zinc-600 rounded-full h-12 border">
                            <div className="flex flex-row justify-between w-full text-neutral-300">
                                <div className="h-12 items-center hover:text-zinc-50 cursor-pointer sm:hidden flex transition-all" onClick={mobileopener}>
                                    <svg className="h-5 flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z"></path></svg>
                                </div>
                                <a href="/" className={`hover:text-neutral-50 hidden sm:flex transition-all relative cursor-pointer h-12 items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
                                    <p>Home</p>
                                    {pathname === '/' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/#projects" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 hidden sm:flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13C20.0929 13 21.1175 13.2922 22 13.8027V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13.3414C13.1203 20.3744 13 19.7013 13 19C13 15.6863 15.6863 13 19 13ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z"></path></svg>
                                    Projects
                                    {pathname === '/projects' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/work" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 hidden sm:flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 19H14V6.00003L20.3939 8.74028C20.7616 8.89786 21 9.2594 21 9.65943V19H23V21H1V19H3V5.6499C3 5.25472 3.23273 4.89659 3.59386 4.73609L11.2969 1.31251C11.5493 1.20035 11.8448 1.314 11.9569 1.56634C11.9853 1.63027 12 1.69945 12 1.76941V19Z"></path></svg>
                                    Work
                                    {pathname === '/work' && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/blog" className={`hover:text-neutral-50 transition-all relative cursor-pointer h-12 hidden sm:flex items-center flex-row gap-2`}>
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"></path></svg>
                                    Blog
                                    {pathname === '/blog'  && <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>}
                                </a>
                                <a href="/#contact" className="hover:text-neutral-50 text-neutral-100/60 relative hidden sm:flex transition-all cursor-pointer h-12 items-center gap-2">
                                    <svg className="flex w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 7C8.5 8.10457 7.60457 9 6.5 9C5.39543 9 4.5 8.10457 4.5 7C4.5 5.89543 5.39543 5 6.5 5C7.60457 5 8.5 5.89543 8.5 7ZM2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5V19H9V16.5ZM11 21H2V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21ZM19.5 7C19.5 8.10457 18.6046 9 17.5 9C16.3954 9 15.5 8.10457 15.5 7C15.5 5.89543 16.3954 5 17.5 5C18.6046 5 19.5 5.89543 19.5 7ZM13.5 7C13.5 9.20914 15.2909 11 17.5 11C19.7091 11 21.5 9.20914 21.5 7C21.5 4.79086 19.7091 3 17.5 3C15.2909 3 13.5 4.79086 13.5 7ZM20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5V19H20V16.5ZM22 21H13V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21Z"></path></svg>
                                    <p>Contact</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
