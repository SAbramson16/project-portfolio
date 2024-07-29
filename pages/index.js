import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import photo from "../public/prof-photo.jpg";
import weather from "../public/weather-dashboard.png";
import booknook from "../public/booknook-screenshot.png";
import quiz from "../public/code-quiz.png";
import doodle from "../public/doodle-screenshot.png";
import password from "../public/password-gen.png";
import employee from "../public/emp-screenshot.png";
// import resume from "../public/SharonAbramsonResume.pdf";
import { useState } from 'react';


export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Sharon Abramson</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between">
                        <h1 className="text-xl font-sans dark:text-white">Sharon Abramson</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
                            </li>
                            <li><a className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/SharonAbramsonResume.pdf" download>Resume</a></li>
                        </ul>
                    </nav>

                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Sharon Abramson</h2>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Creative Thinker | Problem Solver | Lifelong Learner</h3>
                        <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Dedicated Full Stack Developer with a passion for problem-solving and continuous learning. Known for my strong communication skills and ability to create user-friendly, responsive web interfaces, I thrive in collaborative environments and am committed to helping clients achieve their goals. Let&apos;s get in touch!</p>
                    </div>

                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                        <a href="https://www.linkedin.com/in/sharon-abramson"><AiFillLinkedin></AiFillLinkedin></a>
                        <a href="https://github.com/SAbramson16"><AiFillGithub></AiFillGithub></a>
                    </div>

                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-80 mt-20 overflow-hidden md:h-96 md:w-76">
                        <Image src={photo} layout="fill" objectFit="cover" alt="bio-pic"/>
                    </div>
                </section>

                <section>
                    <div>
                        <h3 className="text-3xl py-1 text-center mt-5 dark:text-white md:text-5xl">My Projects</h3>
                        <p className="text-md py-5 leading-6 text-gray-800 text-center dark:text-white md:text-xl">
                            Click on a project image to see the deployed project and the link below to view the repository on GitHub!
                        </p>
                    </div>

                    <div className="gap-10 py-10 lg:flex lg:flex-row lg:flex-wrap">
                        <div className="my-3 bg-gray-200 relative shadow-lg p-10 rounded-xl basis-1/3 flex-1 dark:bg-gray-800">
                            <h3 className="inset-0 flex items-center justify-center text-teal-800 text-2xl font-bold mb-2 dark:text-teal-400">Weather Dashboard</h3>
                            <a href="https://sabramson16.github.io/weather-dashboard">
                                <Image className="rounded-lg object-cover" src={weather} width={'100%'} height={'100%'} layout={'responsive'} alt="weather"></Image>
                            </a>
                            <h4 className="text-md pt-1 inset-0 flex items-center justify-center font-bold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><a href="https://github.com/SAbramson16/weather-dashboard">GitHub Repository</a></h4>
                        </div>

                        <div className="my-3 bg-gray-200 relative shadow-lg p-10 rounded-xl basis-1/3 flex-1 dark:bg-gray-800">
                            <h3 className="inset-0 flex items-center justify-center text-teal-800 text-2xl font-bold mb-2 dark:text-teal-400">Code Quiz</h3>
                            <a href="https://sabramson16.github.io/code-quiz/">
                                <Image className="w-full h-auto" src={quiz} width={'100%'} height={'100%'} layout={'responsive'} alt="code-quiz"></Image>
                            </a>
                            <h4 className="text-md pt-1 inset-0 flex items-center justify-center font-bold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><a href="https://github.com/SAbramson16/code-quiz">GitHub Repository</a></h4>
                        </div>

                        <div className="my-3 bg-gray-200 relative shadow-lg p-10 rounded-xl basis-1/3 flex-1 dark:bg-gray-800">
                            <h3 className="inset-0 flex items-center justify-center text-teal-800 text-2xl font-bold mb-2 dark:text-teal-400">Employee Tracker</h3>
                            <a href="https://drive.google.com/file/d/14cqS4adv-N9hgT42FDJjQmoMoK1AFiwq/view">
                                <Image className="w-full h-auto" src={employee} width={'100%'} height={'100%'} layout={'responsive'} alt="employee-tracker"></Image>
                            </a>
                            <h4 className="text-md pt-1 inset-0 flex items-center justify-center font-bold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><a href="https://github.com/SAbramson16/employee-tracker">GitHub Repository</a></h4>
                        </div>

                        <div className="my-3 bg-gray-200 relative shadow-lg p-10 rounded-xl basis-1/3 flex-1 dark:bg-gray-800">
                            <h3 className="inset-0 flex items-center justify-center text-teal-800 text-2xl font-bold mb-2 dark:text-teal-400">Random Password Generator</h3>
                            <a href="https://sabramson16.github.io/password-generator/">
                                <Image className="w-full h-auto" src={password} width={'100%'} height={'100%'} layout={'responsive'} alt="password-gen"></Image>
                            </a>
                            <h4 className="text-md pt-1 inset-0 flex items-center justify-center font-bold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><a href="https://github.com/SAbramson16/password-generator">GitHub Repository</a></h4>
                        </div>

                        <div className="my-3 bg-gray-200 relative shadow-lg p-10 rounded-xl basis-1/3 flex-1 dark:bg-gray-800">
                            <h3 className="inset-0 flex items-center justify-center text-teal-800 text-2xl font-bold mb-2 dark:text-teal-400">Doodle Drop</h3>
                            <a href="https://doodledrop-7357eeb23db1.herokuapp.com/">
                                <Image className="w-full h-auto" src={doodle} width={'100%'} height={'100%'} layout={'responsive'} alt="doodle-drop"></Image>
                            </a>
                            <h4 className="text-md pt-1 inset-0 flex items-center justify-center font-bold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><a href="https://github.com/SAbramson16/doodle-drop">GitHub Repository</a></h4>
                        </div>

                        <div className="my-3 bg-gray-200 relative shadow-lg p-10 rounded-xl basis-1/3 flex-1 dark:bg-gray-800">
                            <h3 className="inset-0 flex items-center justify-center text-teal-800 text-2xl font-bold mb-2 dark:text-teal-400">BookNook</h3>
                            <a href="https://book-club-u6w0.onrender.com">
                                <Image className="w-full h-auto" src={booknook} width={'100%'} height={'100%'} layout={'responsive'} alt="booknook"></Image>
                            </a>
                            <h4 className="text-md pt-1 inset-0 flex items-center justify-center font-bold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><a href="https://github.com/SAbramson16/book-nook">GitHub Repository</a></h4>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
