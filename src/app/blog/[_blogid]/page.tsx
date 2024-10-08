"use client"
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import React, { useState, useEffect } from 'react';
import { CalendarDaysIcon, AlertTriangle, ArrowLeft } from 'lucide-react'
import Head from 'next/head';

interface BlogPageProps {
    params: {
        _blogid: string;
    };
}

export default function BlogPage({ params: { _blogid } }: BlogPageProps){
    const [blog, setBlog] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`/api/grab-blog-id?blogid=${_blogid}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json(); // Parse the response as JSON
        })
        .then((data) => {
        setBlog(Array.isArray(data) ? data : [data]);
        console.log(data);
        setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setNotFound(true);
        });
    }, [_blogid]);

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


    const blogauthor = blog.map((blogItem: any) => blogItem.author);
    const blogtitle = blog.map((blogItem: any) => blogItem.title);
    var authorimage = "";
    var authordescription = "";
    if (blogauthor.includes("Harry Campbell")) {
        authorimage = "/1720299869628.jpeg";
        authordescription = "Software Developer and Security Engineer";
    } else if (blogauthor.includes("HDev Group")) {
        authorimage = "/logohprojects.png";
        authordescription = "HDev HQ - Sharing the latest news and updates from the HDev Group";
    }

    if (blogauthor.length > 0) {
        document.title = `${blogauthor[0]} | Blog | ${blogtitle}`;
    }

    return(
        <>

            <div className="bg-gradient-to-tr flex items-center justify-center background w-full h-full relative m-0  bg-no-repeat">
                <div className="flex w-full items-center relative flex-col">
                    <Header />
                        <main className="flex min-h-screen flex-col items-center w-full">
                            <div className="mx-auto w-full max-w-[900px] px-4 text-lg sm:px-12 md:px-16">
                                <div className="w-full flex flex-col px-5 py-5">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-bold text-2xl text-zinc-100"></h1>
                                        <p className="font-mono font-semibold text-sm text-zinc-400">
                                        </p>
                                    </div>
                                    <div className='flex flex-row justify-center  gap-3 mt-3 flex-wrap'>
                                        {
                                            notFound ? (
                                            <div className="flex  justify-center min-h-screen">
                                                <div className="w-full border-red-500 max-w-md">
                                                  <div className="pt-6 text-center">
                                                    <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
                                                    <h2 className="text-2xl font-bold mb-2">Blog Not Found</h2>
                                                    <p className="text-muted-foreground">The blog you are looking for does not exist. One day...</p>
                                                    <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.location.href = '/blog'}>Go Back</button>
                                                  </div>
                                                </div>
                                              </div>
                                            ) : null
                                        }
                                        {
                                            loading ? (
                                                <div className="flex flex-col items-center justify-center w-full h-full">
                                                    <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-neutral-400"></div>
                                                </div>
                                            ) : (
                                                blog.map((blogItem: any) => (
                                                    <div key={blogItem.id} className="py-1 rounded shadow-md w-full">
                                                        <div className='flex flex-col gap-2 pb-5 0'>
                                                            <div className='w-min flex flex-col gap-3'>
                                                                <a className='flex flex-row items-center text-xs gap-1' href='/blog'><ArrowLeft width={14} height={14} /> Back</a>
                                                                <p className='text-xs cursor-pointer hover:text-blue-400 font-semibold'>{blogItem.type}</p>
                                                            </div>
                                                            <h2 className="font-bold text-3xl">{blogItem.title}</h2>
                                                            <div className='flex flex-row gap-2  mt-2'>
                                                                <img src={authorimage} className='h-10 w-10 rounded-full'></img>
                                                                <div className='flex flex-col justify-between'>
                                                                    <p className='font-normal text-sm text-gray-400'>By <b>{blogItem.author}</b></p>
                                                                    <div className='flex flex-row gap-2 items-center'>
                                                                        <p className='font-normal text-xs text-gray-400'>{readtimecalc(blogItem.body)} read</p>
                                                                        <p>·</p>
                                                                        <p className='font-normal text-xs text-gray-400 flex items-center flex-row gap-0.5'><CalendarDaysIcon height={18} /> {new Date(blogItem.created).toDateString()}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-2 mt-1'>
                                                            {blogItem.body.split('\n').map((line: string, index: number) => (
                                                                <p key={index} className='font-normal text-lg'>
                                                                    {line.split(' ').map((word, wordIndex) => (
                                                                        word.startsWith('https://') ? (
                                                                            <a key={wordIndex} href={word} className='text-blue-500 underline'>{word}</a>
                                                                        ) : (
                                                                            <span key={wordIndex}>{word} </span>
                                                                        )
                                                                    ))}
                                                                </p>
                                                            ))}
                                                        </div>
                                                        <div className='border-t border-b border-neutral-800/50 mt-10 gap-10  md:items-center h-40 flex flex-col md:flex-row'>
                                                            <h1 className='text-xl font-semibold mt-5 md:mt-0'>The Author</h1>
                                                            <div className='flex flex-row gap-5 items-center'>
                                                                <img src={authorimage} className='h-12 w-12 rounded-full'></img>
                                                                <div className='flex flex-col justify-between items-start'>
                                                                    <p className='font-semibold'>{blogItem.author}</p>
                                                                    <p className='font-normal text-sm text-gray-400'>{authordescription}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}