"use client"
import Header from "../components/header/header";
import "../styles/main.css"
import React, { useState } from 'react';
import Image from 'next/image'
import {AnimatedText, SecondTextAnimation, TextTopAnimation, LinkedinView, CtaZone, Testimonials1, Testimonials2, Testimonials3, Gripperzoom} from "../components/animtext/firstboxtext";
import { useEffect } from "react";
import Skills from "../components/skills/skills";
import Footer from "../components/footer/footer";
import Projects from "../components/projects/projects";
import Confetti from 'react-confetti'

export default function Home() {
    var timescopied = 0;
    const CopyPaste = () => {
      navigator.clipboard.writeText("hello@hdev.uk");
      const clicker = document.querySelector(".clicker");
      if (clicker) {
        if (timescopied > 30){
          clicker.innerHTML = "Im done. You copied it " + timescopied + " times. Your not stopping are you?";
          clicker.ariaDisabled
        }
        else if (timescopied > 2){
          clicker.innerHTML = "You copied it " + timescopied + " times.";
        }
        else{
          clicker.innerHTML = "Copied!";
        }
        clicker.classList.remove("bg-neutral-700/30");
        clicker.classList.add("bg-green-800");
        timescopied++;
        setTimeout(() => {
          clicker.innerHTML = "<svg class='w-6 hover:text-white cursor-pointer' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z'></path></svg>";
          clicker.classList.remove("bg-green-800");
          clicker.classList.add("bg-neutral-700/30");
        }, 1000);
      }
    }

  useEffect (() => {
    const facts = [
      "I wrote my first line of code when i was 13.",
      "When I was 14 I created my first website.",
      "Away from programming I enjoy network design and chatting with friends.",
      "I am a self taught developer.",
      "I have helped over 25+ people with their projects.",
      "I have founded my own startup.",
      "I have 300 followers on linkedin.",
      "My first website was a banking site in python.",
      "I am a full stack developer.",
      "I currently am in my second year of college studying IT.",
      "My favourite language is TypeScript.",
      "I research a lot into how security breaches happen and how to prevent them.",
      "I drive a motorbike.",
    ]
    const factgen = document.getElementById("factgen");
    if (factgen) {
      // get a random fact should be under 100ms
      const randomFact = Math.floor(Math.random() * facts.length);
      factgen.innerText = facts[randomFact];
    }
  }, [])
  
  return (
    <>
  <div className="bg-gradient-to-tr flex items-center justify-center background w-full h-full relative m-0 text-zinc-400 bg-no-repeat">
    <div className="flex w-full items-center relative flex-col">
    <Header />
    <section className="sm:flex hidden w-full h-screen max-h-[1000px] z-20 relative mt-[-10rem] max-w-[1850px] mb-12 flex-col items-center justify-center gap-2">
      <div className="flex items-center flex-col h-full justify-center z-20 w-full boxshadower shadow-b-xl rounded-b-[2rem] rounded-tl-[5rem]  boxover px-[10rem] py-28 xs:gap-6 md:gap-10 lg:gap-6">
        <div className="flex  flex-col w-full items-center">
          <h1 className="font-bold text-center text-4xl md:text-8xl z-30 bg-gradient-to-r from-neutral-400 via-white to-neutral-400 py-6 text-transparent bg-clip-text boujee-text">Harry Campbell</h1>
          <TextTopAnimation />
        </div>
      </div>
    </section>
    <main className="flex min-h-screen flex-col z-30 items-center w-full relative ">
    <div className="mx-auto w-full max-w-[1500px] px-4 text-lg sm:px-12 md:px-16 relative">
    <div className="w-full flex flex-col md:px-5 md:py-5">
      <div className="flex flex-col gap-5 mt-10 w-full">
      <h1 className="font-medium text-white text-3xl mb-12 hidden sm:flex">About me</h1>
        <div className="flex flex-col md:flex-row justify-end gap-5 w-full h-full">
          <Gripperzoom />
              <AnimatedText />
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="boxbg rounded-xl shinytop px-4 md:p-6 gap-5 py-8 w-full md:flex-1 md:max-h-[7rem] md:min-h-[7rem] h-full flex flex-col">
            <div className="flex justify-between  md:h-[7rem] flex-col">
              <h1 className="font-normal text-sm">Facts about me</h1>
              <div>
                <p className="text-white" id="factgen"></p>
              </div>
            </div>
          </div>
          <a className="boxbg rounded-xl shinytop px-4 md:p-5 gap-5 py-8 w-full md:w-[20%] max-h-[7rem] min-h-[7rem] h-full flex items-center justify-center flex-col text-white" href="https://www.linkedin.com/in/harry-campbell-75ab83250/">
                <LinkedinView />
          </a>
          <a href="#contact" className="boxbg rounded-xl shinytop relative px-4 md:p-6 gap-5 py-8 w-full md:w-[20%] max-h-[7rem] min-h-[7rem] h-full flex items-center justify-center flex-col text-white">
            <div className="flex items-center flex-col overflow-hidden">
              <h1 className="font-semibold ">Contact</h1>
            </div>
          </a>
        </div>
      </div>
      <Projects />
      <Skills />
      <div className="flex flex-col mt-12 mb-12 w-full">
        <h1 className="font-medium text-white text-3xl mb-12">Testimonials</h1>
        <Testimonials1 />
        <Testimonials2 />
        <Testimonials3 />
      </div>
      <Blog />
      </div>
      </div>
      <section className="flex flex-col mt-10 h-auto w-full gradiented  items-center justify-center" id="contact">
        <div className="max-w-[1500px] px-4 py-12 w-full flex items-center h-[50rem] flex-col justify-center">
          <CtaZone />
          <div className="w-full flex">
            <p className="text-white md:w-1/3 text-md font-medium">Looking for a project partner to help turn ideas into reality? I'm ready. Let's deploy something incredible.</p>
          </div>
          <div className="w-full flex gap-5 mt-5 flex-row">
            <div className="py-1 px-3 flex flex-row justify-center gap-2 items-center rounded-md">
            <svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg><h2 className="text-white">hello@hdev.uk</h2>
            </div>
            <div className="py-2 px-4 bg-neutral-700/30 rounded-md text-white transition-all clicker cursor-pointer select-none" onClick={CopyPaste}>
            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
    </div>
    </>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/grab-blog') // This will make a GET request
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json(); // Parse the response as JSON
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <div>
      <h1 className="font-medium text-white text-3xl mb-12">Blogs</h1>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-row gap-3 flex-wrap">
        {blogs
          .sort((a: any, b: any) => new Date(b.created).getTime() - new Date(a.created).getTime())
          .slice(0, 2)
          .map((blog: any) => (
          <div key={blog.number} className="boxbg rounded-xl md:max-w-[45%] w-full md:min-h-[11.5rem] flex-wrap h-full relative shinytop p-6 flex flex-col gap-4 uppop">
            <div className='flex flex-col relative w-[100%] '>
              <div className='flex relative items-center justify-between'>
                <h3 className="text-xl font-semibold text-white px-1.5 py-1">{blog.title}</h3>
                <span className="bg-green-700 text-white px-2 py-1 mt-2 rounded text-sm">
                  {blog.type}
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm px-1.5">
              {blog.body.split(' ').slice(0, 35).join(' ')}...
            </p>
            <div className="flex flex-wrap gap-2 px-1.5 flex-row">
              {blog?.techstack?.map((tech: string) => (
                <span key={tech} className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 px-1.5">
              {blog.number !== '' ? (
                <a href={`/blog/${blog.number}`} className="text-white bg-gradient-to-tr from-purple-400/60 cursor-pointer to-purple-400 hover:shadow-xl shadow-white mainlinker relative pr-8 pl-3  py-1 rounded text-sm">
                  View more of {blog.title} <span className="text-white font-bold text-md absolute ml-2 dalinker ">→</span>
                </a>
              ) : (
                null
              )}
            </div>
          </div>
        ))}
        </div>
        <a href="/blog" className="text-white text-center">View more</a>
      </div>
    </div>
  );
}