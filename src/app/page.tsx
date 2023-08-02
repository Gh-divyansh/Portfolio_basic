'use client'
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import dev from "/Users/DELL/Desktop/projects/portfolio/public/K4C.png"
import design from "/Users/DELL/Desktop/projects/portfolio/public/design.png"
import code from "/Users/DELL/Desktop/projects/portfolio/public/code.png"
import consulting from "/Users/DELL/Desktop/projects/portfolio/public/consulting.png"
import web1 from "/Users/DELL/Desktop/projects/portfolio/public/web1.png";
import web2 from "/Users/DELL/Desktop/projects/portfolio/public/web2.png";
import web3 from "/Users/DELL/Desktop/projects/portfolio/public/web3.png";
import web4 from "/Users/DELL/Desktop/projects/portfolio/public/web4.png";
import web5 from "/Users/DELL/Desktop/projects/portfolio/public/web5.png";
import web6 from "/Users/DELL/Desktop/projects/portfolio/public/web6.png";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
    // const redirectTolink = () => {
    //   // window.location.href = 'https://instagram.com/_igdivyansh?igshid=MzNlNGNkZWQ4Mg==';  this funcution is use for open link in same window
    // }
    const redirectTolink = (url) => {
      if (typeof window !== 'undefined') {
        window.open(url, '_blank');
      } else {
        console.error('window object is not available. Unable to redirect.');
      }
    };
    
    
  return (
  <div className={darkMode ? "dark" : ""}>
    <main className='bg-49c5b6 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
     <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between dark:text-white'>
        <h1 id='logo' className='text-xl font-spacemono font-bold'>DeveloperD</h1>
        <ul className='flex items-center'>
          <li>
          <BsFillMoonStarsFill 
           onClick={() => setDarkMode(!darkMode)}
           className='cursor-pointer text-2xl'/>
          </li>
          <li><a className='bg-gradient-to-r from-cyan-500 to-orange-700 text-white px-4 py-2 rounded-md ml-8' href="" onClick={() => redirectTolink('https://drive.google.com/file/d/17l0NOHBEXJOLnxXkdb7Lczi0CP6iEbl2/view?usp=drive_link')}>Resume</a></li>
        </ul>
      </nav>
      <div className='text-center p-10 '>
        <h2 className='text-5xl py-2 text-orange-700 font-spacemono font-semibold md:text-6xl'>Divyanshu Tailor</h2>
        <h3 className='text-2xl py-2 font-spacemono font-medium md:text-3xl dark:text-white'>Developer and Designer.</h3>
        <p className='text-md py-4 leading-8 text-gray-800 dark:text-white'>Unlock the potential of your ideas with a skilled freelancer specializing in programming and captivating design. 
       <br /> Together, we'll bring your content to life and surpass all expectations. 
       <br />Take the first step and join me below; let's embark on this creative journey!</p>
      </div>
      <div className='text-4xl flex justify-center gap-16 py-1  text-gray-600 dark:text-white'>
      <AiFillInstagram onClick={() => redirectTolink("https://instagram.com/_igdivyansh?igshid=MzNlNGNkZWQ4Mg==")}/>
      <AiFillLinkedin onClick={() => redirectTolink('https://www.linkedin.com/in/divyanshu-tailor-106570266')} />
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-orange-700 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96'>
        <Image src={dev} layout='fill' objectFit='cover'/>
      </div>
     </section>

      <section >
        <div >
          <h3 className='text-2xl py-1 dark:text-white'>Services I Offer</h3>
          <p className='text-md leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-orange-700"> agencies </span>
              consulted for <span className="text-orange-700">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.</p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design and programming.
            </p>
        </div>

        <div  className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className='flex justify-center items-center pt-12'><Image src={design} width={100} height={100} /></div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-orange-700">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <div className='flex justify-center items-center pt-12'><Image src={code} width={100} height={100} /></div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-orange-700">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <div className='flex justify-center items-center pt-12'><Image src={consulting} width={100} height={100} /></div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-orange-700">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
        </div>

      </section>
      <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-orange-700"> agencies </span>
              consulted for <span className="text-orange-700">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming.
            </p>
            </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>

          </section>
    </main>
    </div>
  )
}

