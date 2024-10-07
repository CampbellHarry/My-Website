"use client"
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import "../../styles/main.css"
import React, { useState, useEffect } from 'react';
import { CalendarDaysIcon, AlertTriangle } from 'lucide-react';

export default function BlogPage() {
    const [blogsearch, setBlogSearch] = useState('');
    return (
        <>
            <div className="bg-gradient-to-tr flex items-center justify-center background w-full h-full relative m-0  bg-no-repeat">
                <div className="flex w-full items-center relative flex-col">
                    <Header />
                    <main className="flex min-h-screen flex-col items-center w-full">
                        <div className="mx-auto w-full max-w-[900px] px-4 text-lg sm:px-12 md:px-16">
                            <div className="w-full flex flex-col px-5 py-5">
                                <div className="flex flex-col gap-1">
                                    <h1 className="font-bold text-2xl text-zinc-100">Blogs</h1>
                                    <p className="font-mono font-semibold text-sm text-zinc-400">
                                        Here is my blog where I write about my experiences and thoughts on various topics. This is a place where I share my knowledge and experiences with the world.
                                    </p>
                                    <input 
                                        type="text" 
                                        placeholder="Search for a blog or a tag" 
                                        onChange={(e) => setBlogSearch(e.target.value)} 
                                        value={blogsearch} 
                                        className="bg-transparent border-b border-zinc-400 text-zinc-400 p-2 w-full mt-2"
                                    />
                                </div>
                                <div className='flex flex-row justify-center items-center mt-10 flex-wrap'>
                                    <Blogs searches={blogsearch} />
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

function Blogs({ searches }: { searches: string }) {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const readtimecalc = (text: string) => {
        const wordsPerMinute = 200;
        const noOfWords = text.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);

        if (readTime < 1) {
            return `${Math.ceil(minutes * 60)} seconds`;
        } else if (readTime === 1) {
            return `${readTime} minute`;
        } else if (readTime < 60) {
            return `${readTime} minutes`;
        } else {
            const hours = Math.floor(readTime / 60);
            const remainingMinutes = readTime % 60;
            return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes > 0 ? `and ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}` : ''}`;
        }
    }

    useEffect(() => {
        fetch('/api/grab-blog') // This will make a GET request
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); // Parse the response as JSON
            })
            .then((data) => {
                setBlogs(data.reverse());
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false); // Ensure loading stops even on error
            });
    }, []);

    const filteredBlogs = searches.length > 2
        ? blogs.filter((blog: any) =>
            blog.title.toLowerCase().includes(searches.toLowerCase()) ||
            blog.type.toLowerCase().includes(searches.toLowerCase()) ||
            blog.techstack.some((tech: string) =>
                tech.toLowerCase().includes(searches.toLowerCase())
            )
        ).reverse()
        : blogs.reverse(); // if no results show error
        if (filteredBlogs.length === 0 && !loading) {
            return (
                <div className="flex  min-h-screen">
                <div className="w-full border-red-500 max-w-md">
                  <div className="pt-6 text-center">
                    <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Blog Not Found</h2>
                    <p className="text-muted-foreground">Your search shown no results.</p>
                  </div>
                </div>
              </div>
            );
        }

    return (
        <>
            {loading ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-neutral-400"></div>
                </div>
            ) : (
                filteredBlogs.map((blog: any) => (
                    <div key={blog.number} className="flex flex-row justify-between h-full w-full gap-5">
                    <div className="flex flex-col relative items-center justify-center  h-auto min-h-full">
                        <div className="w-6 sticky top-24 flex items-center justify-center bg-blue-800/80  rounded-full h-6">
                            {blog.number}
                        </div>
                        <div className="border-l border-neutral-800 flex-grow pb-3 h-full" />
                    </div>
                    <div className="boxbg rounded-xl w-full md:min-h-[11.5rem] mb-4 flex-wrap h-auto relative shinytop p-6 flex flex-col gap-4 uppop">
                        <div className="flex flex-col relative w-[100%]">
                            <div className="flex flex-row gap-2 items-center justify-between mb-4">
                                <div className="flex flex-row gap-2">
                                    <CalendarDaysIcon size={18} className="text-gray-300" />
                                    <p className="text-gray-300 text-sm">
                                        {new Date(blog.created).toLocaleDateString()}
                                    </p>
                                </div>
                                <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                                    {readtimecalc(blog.body)} read
                                </span>
                            </div>
                            <div className="flex relative items-center justify-between">
                                <h3 className="text-xl font-semibold text-white px-1.5 py-1">
                                    {blog.title}
                                </h3>
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
                            <a href={`/blog/${blog.number}`} className="text-white bg-gradient-to-tr from-teal-400 to-teal-800 hover:shadow-xl shadow-white mainlinker relative pr-8 pl-3 py-1 rounded text-sm">
                                Read More <span className="text-white font-bold text-md absolute ml-2 dalinker">→</span>
                            </a>
                        </div>
                    </div>
                </div>                
                ))
            )}
        </>
    );
}
