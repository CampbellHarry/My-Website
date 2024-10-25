import { useEffect } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
    useEffect(() => {
        const wordshower = document.querySelectorAll('.wordshow');
        const fulltopgradient = document.querySelector('.fulltopgradient');
        if (window.innerWidth <= 640) {
          gsap.to(fulltopgradient, {
            width: "100%",
            duration: 0,
          });
        } else {
        gsap.fromTo(
          fulltopgradient,
          { width: "120%", position: 'relative' },
          {
            width: "90rem",
            position: 'relative',
            opacity: 1,
            duration: 3,
            scrollTrigger: {
              trigger: fulltopgradient,
              start: 'top 80%',
            },
          }
        );
      }
        wordshower.forEach((word, index) => {
          gsap.fromTo(
            word,
            { y: -30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: .35,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: word,
                start: 'top 80%',
              },
            }
          );
        });
      }, []);

  return (
    <div className="fulltopgradient justify-between relative rounded-3xl shinytop px-4 md:p-10 py-9 w-full min-h-[20rem] h-full flex flex-col text-white">
      <h1 className="relative mb-12 text-xl flex gap-1.5 flex-wrap md:text-2xl flex-row md:mb-24">
        <div className="wordshow">I</div>
        <div className="wordshow">am</div>
        <div className="wordshow">a</div>
        <div className="wordshow">17</div>
        <div className="wordshow">year</div>
        <div className="wordshow">old</div>
        <div className="wordshow">software</div>
        <div className="wordshow">engineer</div>
        <div className="wordshow">with</div>
        <div className="wordshow">a</div>
        <div className="wordshow">focus</div>
        <div className="wordshow">on</div>
        <div className="wordshow">security,</div>
        <div className="wordshow">development,</div>
        <div className="wordshow">and</div>
        <div className="wordshow">project</div>
        <div className="wordshow">planning.</div>
        <div className="wordshow">Since</div>
        <div className="wordshow">2022,</div>
        <div className="wordshow">I</div>
        <div className="wordshow">have</div>
        <div className="wordshow">collaborated</div>
        <div className="wordshow">with</div>
        <div className="wordshow">diverse</div>
        <div className="wordshow">teams,</div>
        <div className="wordshow">companies,</div>
        <div className="wordshow">and</div>
        <div className="wordshow">individuals</div>
        <div className="wordshow">worldwide.</div>
      </h1>
      <SecondTextAnimation />
    </div>
  );
};

const SecondTextAnimation = () => {
    useEffect(() => {
        const wordshower = document.querySelectorAll('.zoomup');
        wordshower.forEach((word, index) => {
          gsap.fromTo(
            word,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: .35,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: word,
                start: 'top 80%',
              },
            }
          );
        });
      }, []);
    return(
        <h1 className="text-sm zoomup">
            <i>"Driven by a passion to safeguard the future of the internet by neutralizing tomorrow’s threats, ensuring a safer today."</i> - Harry Campbell
        </h1>
    )
}
const TextTopAnimation = () => {
    useEffect(() => {
        const TopText = document.querySelectorAll('.topTextShow');
        TopText.forEach((word, index) => {
          gsap.fromTo(
            word,
            { y: 30, opacity: 0 },
            {
              y: 0,
              zIndex: 1,
              opacity: 1,
              duration: .35,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: word,
                start: 'top 80%',
              },
            }
          );
        });
      }, []);
    return(
        <h2 className="font-semibold md:text-xl text-center flex-row min-w-[39rem] w-full gap-2 flex items-center overflow-hidden justify-center text-wrap text-white py-1 text-transparent">
            <div className="topTextShow">The</div>
            <div className="topTextShow">security</div>
            <div className="topTextShow">focused</div>
            <div className="topTextShow">software</div>
            <div className="topTextShow">engineer</div>
            <div className="topTextShow">for</div>
            <div className="topTextShow text-teal-300">you.</div>
        </h2>
    )
}
export function LinkedinView() {
    useEffect(() => {
        const linkedin = document.querySelectorAll('.bluespin');
          gsap.fromTo(
            linkedin,
            { y: 30, opacity: 0, color: '#0072b1'},
            {
              y: 0,
              color: '#fff',
              opacity: 1,
              duration: .5,
              scrollTrigger: {
                trigger: linkedin,
                start: 'top 70%',
              },
            }
          );
      }, []);
    return (
        <div className="flex items-center flex-col">
            <svg className="flex w-12 p-1 bluespin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
            <h1 className="font-semibold">Linkedin</h1>
        </div>
    )
}
export function CtaZone(){
  useEffect(() => {
    const CTAZoner = document.querySelectorAll('.CTAZoner');
    CTAZoner.forEach((word, index) => {
      gsap.fromTo(
        word,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: .35,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);
  return(
  <div className="font-normal text-white mb-4 w-full flex-wrap flex flex-row gap-3.5 text-4xl md:text-6xl">
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>Let's</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>Develop</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>The</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>Next</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>Big</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>Thing</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>—</h1>
    <h1 className="CTAZoner" style={{ lineHeight: '140%', overflow: 'hidden' }}>Today</h1>
  </div>
  )
}
export function Testimonials1(){
  useEffect(() => {
    const Testimonial1 = document.querySelectorAll('.Testimonial1');
    Testimonial1.forEach((word, index) => {
      gsap.fromTo(
        word,
        { x: -3, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: .35,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);
  return(
    <div className="flex flex-row  gap-5 w-full">
    <div className="flex flex-col relative items-center justify-center">
      <img className="w-10 sticky top-10 rounded-full h-10" src="https://media.licdn.com/dms/image/v2/D4E03AQHrICZcMjsVaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727889807859?e=1733961600&v=beta&t=EpYS8VK8rTfUfItsGs5uOC-kgcwl9jG0spz6n1pmkvI"></img>
      <div className="border-l h-full border-neutral-800" />
    </div>
    <div className="flex flex-col pb-10 pt-4 w-full relative">
      <div className="absolute top-4 left-[-.9rem] boxbg rounded-bl-3xl bg-white h-4 w-9 "/>
      <div className="flex flex-col gap-2 boxbg py-7 px-9 rounded-lg">
        <div>
          <div className="font-semibold flex-row flex gap-2 text-2xl mb-0.5 text-white">
            <h1 className="Testimonial1">Kian</h1><h1 className="Testimonial1">Gentry</h1>
          </div>
          <h2 className="font-normal text-sm">Technical Designer @ Hdev Group | Software Developer | Producer | Student</h2>
        </div>
        <div className="font-normal text-xl flex flex-row flex-wrap gap-1">
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>I've</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>got</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>say,</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>has</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>be</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>one</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>of</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>the</p>
          <p className="Testimonial1 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>brightest</p>
          <p className="Testimonial1 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>minds</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>I've</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>worked</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>with</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>in</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>my</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>entire</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>career.</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>His</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>pure</p>
          <p className="Testimonial1 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>dedication</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>and</p>
          <p className="Testimonial1 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>passion</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>for</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>his</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>own</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>work</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>as</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>well</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>as</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>his</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>contributions</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>towards</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>other</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>peoples</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>projects</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>is</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>honestly</p>
          <p className="Testimonial1 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>outstanding.</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>I</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>can</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>not</p>
          <p className="Testimonial1 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>recommend</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>him</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>enough</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>for</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>any</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>team</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>in</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>need</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>of</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>a</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>new</p>
          <p className="Testimonial1" style={{ lineHeight: '140%', overflow: 'hidden'}}>member.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export function Testimonials2(){
  useEffect(() => {
    const Testimonial2 = document.querySelectorAll('.Testimonial2');
    Testimonial2.forEach((word, index) => {
      gsap.fromTo(
        word,
        { x: -3, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: .35,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);
  return(
    <div className="flex flex-row gap-5 w-full">
    <div className="flex flex-col relative items-center justify-center">
      <img className="w-10 sticky top-10 rounded-full h-10" src="/unknown.svg"></img>
      <div className="border-l border-neutral-800 h-full" />
    </div>
    <div className="flex flex-col pb-10 relative pt-4 w-full">
    <div className="absolute top-4 left-[-.9rem] boxbg rounded-bl-3xl bg-white h-4 w-9 "/>
      <div className="flex flex-col gap-2 boxbg py-7 px-9 rounded-lg">
        <div>
        <div className="font-semibold flex-row flex gap-2 text-2xl mb-0.5 text-white">
            <h1 className="Testimonial2">Finley</h1><h1 className="Testimonial2">Martin</h1>
          </div>
          <h2 className="font-normal text-sm">Student | Programmer | Graphical Designer | Full Stack Developer.</h2>
        </div>
        <div className="font-normal text-xl flex flex-row flex-wrap gap-1">
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>I</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>have</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>worked</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>alongside</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>as</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>a</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>co-worker</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>or</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>under</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>on</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>several</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>projects</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>over</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>the</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>time.</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>I</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>have</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>not</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>yet</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>met</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>a</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>developer</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>which</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>matches</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>the</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>almost</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>mythical</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>title</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>of</p>
          <p className="Testimonial2 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>"The 10x Developer"</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>more</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>than</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry.</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>His</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>drive</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>actually</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>get</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>stuff</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>done</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>is</p>
          <p className="Testimonial2 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>outstanding;</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>often</p>
          <p className="Testimonial2 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>inspiring</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>his</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>team</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>members</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>do</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>the</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>same.</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>Not</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>mention</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>that</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry's</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>development</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>skills</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>are</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>quite</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>striking</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>for</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>his</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>age.</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>I</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>can</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>whole-heartedly</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>vouch</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>for</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>his</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>skills</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>in</p>
          <p className="Testimonial2 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>problem</p>
          <p className="Testimonial2 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>solving</p>
          <p className="Testimonial2" style={{ lineHeight: '140%', overflow: 'hidden'}}>and</p>
          <p className="Testimonial2 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>management.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export function Testimonials3(){
  useEffect(() => {
    const Testimonial3 = document.querySelectorAll('.Testimonial3');
    Testimonial3.forEach((word, index) => {
      gsap.fromTo(
        word,
        { x: -3, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: .35,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);
  return(
    <div className="flex flex-row gap-5 w-full">
    <div className="flex flex-col relative items-center justify-center">
      <img className="w-10 sticky top-10  bottom-10 rounded-full h-10" src="https://media.licdn.com/dms/image/v2/C5603AQEXZJ4I0OkW8g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1585838213936?e=1731542400&v=beta&t=Y1ej15sCce1wUEztOfTsxcOXf-NWxtsF-tUyCXkiCtY"></img>
      <div className="border-l h-full border-neutral-800" />
      <div className="border-b w-full border-neutral-800" />
    </div>
    <div className="flex flex-col pb-10 pt-4 w-full relative">
    <div className="absolute top-4 left-[-.9rem] boxbg rounded-bl-3xl bg-white h-4 w-9 "/>
      <div className="flex flex-col gap-2 boxbg py-4 px-4 rounded-lg">
        <div>
          <div className="font-semibold flex-row flex gap-2 text-2xl mb-0.5 text-white">
            <h1 className="Testimonial3">Konrad</h1><h1 className="Testimonial3">Gardy</h1>
          </div>          
          <h2 className="font-normal text-sm">Customer Service Deputy Manager at Letsproo sp zoo</h2>
        </div>
        <div className="font-normal text-xl flex flex-row flex-wrap gap-1">
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>is</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>one</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>of</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>the</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>best</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>people</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>I</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>have</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>ever</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>worked</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>with.</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>His</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>excellent</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>work</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>ethic,</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>unstoppable</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>dedication</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>and</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>mind</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>full</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>of</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>great</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>ideas</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>make</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>him</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>a</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>unique</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>person</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>that</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>is</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>extremely</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>hard</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>find.</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>He</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>always</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>finds</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>new</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>ideas</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>and</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>ways</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>optimize</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>projects,</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>constantly</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>improves</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>himself,</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>and</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>his</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>hunger</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>for</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>knowledge</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>can't</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>be</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>stopped.</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>Harry</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>is</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>hands</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>down</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>a</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>priceless</p>
          <p className="Testimonial3 text-cyan-400" style={{ lineHeight: '140%', overflow: 'hidden'}}>addition</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>to</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>any</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>project</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>and</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>organization</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>he</p>
          <p className="Testimonial3" style={{ lineHeight: '140%', overflow: 'hidden'}}>joins.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export function Gripperzoom(){
  // we will have a cursor that will drag the image into position
  useEffect(() => {
    const Gripperzoom = document.querySelectorAll('.Gripperzoom');
    const cursormover = document.querySelectorAll('.cursormover');
    if (window.innerWidth <= 640) {
      gsap.to(Gripperzoom, {
        width: "100%",
        duration: 0,
      });
    } else {
      gsap.fromTo(
        Gripperzoom,
        { top: 0, left: "-70rem", opacity: 0, position: "relative", width: "100%", },
        {
          top: "0rem",
          width: "50rem",
          position: "relative",
          left: 0,
          zIndex: 50,
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: Gripperzoom,
            start: 'top 80%',
          },
        }
      );
      gsap.to(
        cursormover,
        {
          delay: 3,
          opacity: 0,
          left: "-70rem",
          top: "-20rem",
          duration: 3,
          scrollTrigger: {
            trigger: Gripperzoom,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return(
    <>
    <div className="flex flex-row relative z-50 w-full md:w-1/2 Gripperzoom">
    <div className="absolute w-8 hidden sm:flex z-50 right-0 text-white top-4 cursormover">
      <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.9093 12.3603L17.0007 20.8537L14.1816 21.8798L11.0902 13.3864L6.91797 16.5422L8.4087 1.63318L19.134 12.0959L13.9093 12.3603Z"></path></svg>
    </div>
    <div className="boxbg rounded-3xl relative shinytop overflow-hidden px-4 md:p-6 gap-5 py-8 w-full min-h-[20rem] h-full flex items-center justify-center flex-col text-white">
    <Image 
                src="/1720299869628.jpeg" 
                alt="Harry Campbell"
                width={160}
                height={160}
                className="rounded-full"
              />
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-xl bg-gradient-to-r from-neutral-400 via-white to-neutral-400 text-transparent bg-clip-text">Harry Campbell</h1>
        <p className="font-medium">Security. Development. Planning.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export {AnimatedText, SecondTextAnimation, TextTopAnimation};