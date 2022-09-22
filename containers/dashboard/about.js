import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import { motion } from "framer-motion"
import FadeSlide from "../../components/flip-move/fadeSlide";

export default function About() {


    return (
        <div className={'pt-24'}>
            <div className={'px-4'}>
                <h1 className={'text-6xl md:text-8xl pl-4'}>
                    About
                </h1>
                <div className={'text-lg md:mt-32 md:pl-10 pb-10'}>
                    <div className={'md:hidden h-full flex justify-center mb-6 h-72 p-4'}>
                        <div className={'drop-shadow-xl inline-block border-b border-zinc-500 overflow-hidden relative'}>
                            <img src={'portrait-remove-bg.png'} alt={'portrait'} className={'relative z-10 relative '}/>
                        </div>
                    </div>
                    <FadeSlide>
                        <div key={'quote1'} className={' grid md:grid-cols-2 mb-20'}>
                            <div className={'space-y-6 p-4'}>
                                <h3>
                                    Hello!
                                </h3>
                                <div>
                                    I am <span className={'text-pblue font-bold'}>Reymond Pamelar</span>
                                </div>
                                <div>
                                    Raised in sunny San Diego, CA, I have always had an interest in computer science. After graduating San Diego State University, I found a great interest in Web Development.
                                </div>
                                <div>
                                    Interweaving my creativity with problem solving is what I do best!
                                </div>
                                <div>
                                    I love to create <span className={'text-pblue font-bold'}>fluid</span> and <span className={'text-pblue font-bold'}>dynamic</span> web applications while keeping <span className={'text-pblue font-bold'}>responsiveness</span> and <span className={'text-pblue font-bold'}>accessibility</span> in mind.
                                </div>
                                <div>
                                    However, I do like to explore outside the boundaries of a browser.
                                </div>
                            </div>
                            <div className={'hidden h-full md:flex justify-center '}>
                                <div className={'drop-shadow-xl inline-block border-b border-zinc-500 overflow-hidden relative bottom-32'}>
                                    <img src={'portrait-remove-bg.png'} alt={'portrait'} className={'relative z-10 relative -bottom-32 '}/>
                                </div>
                            </div>
                        </div>
                        <div key={'quote2'} className={'grid my-20 mr-20 rounded-xl'}>
                            <div className={' rounded-xl p-4'}>
                                <div className={'border-b flex grid grid-cols-2 justify-center rounded-t-xl p-3'}>
                                    <h4>
                                        Languages
                                    </h4>
                                    <div className={'flex justify-end'}>
                                        <Icon.Code size={50}/>
                                    </div>
                                </div>
                                <ul className={'flex flex-wrap divide-x text-center justify-center rounded-b-xl p-3'}>
                                    <li className={'px-4 grow'}>Javascript</li>
                                    <li className={'px-4 grow'}>HTML</li>
                                    <li className={'px-4 grow'}>CSS</li>
                                    <li className={'px-4 grow'}>Java</li>
                                    <li className={'px-4 grow'}>C</li>
                                    <li className={'px-4 grow'}>C++</li>
                                    <li className={'px-4 grow'}>C#</li>
                                    <li className={'px-4 grow'}>Python</li>
                                </ul>
                            </div>
                            <div>
                                <div className={'flex grid justify-center rounded-t-xl p-3'}>
                                    <div className={'flex justify-center'}>
                                        <Icon.Code size={50}/>
                                    </div>
                                    Frameworks
                                </div>
                                <ul className={'flex gap-2 text-center justify-center rounded-b-xl p-3'}>
                                    <li>Next.js</li>
                                    <li>React.js</li>
                                    <li>React Native</li>
                                    <li>TailwindCSS</li>
                                    <li>Express.js</li>
                                </ul>
                            </div>
                            <div>
                                <div className={'flex grid justify-center  rounded-t-xl p-3 '}>
                                    <div className={'flex justify-center'}>
                                        <Icon.Code size={50}/>
                                    </div>
                                    Developer Tools
                                </div>
                                <ul className={'flex gap-2 text-center justify-center rounded-b-xl p-3'}>
                                    <li>Node.js</li>
                                    <li>Ceramic</li>
                                    <li>Metamask</li>
                                    <li>React Redux</li>
                                    <li>Storybook</li>
                                    <li>Miro</li>
                                    <li>Figma</li>
                                    <li>MongoDB</li>
                                    <li>Postman</li>
                                    <li>Git</li>
                                    <li>Unity Engine</li>
                                </ul>
                            </div>
                        </div>
                    </FadeSlide>
                </div>
            </div>

        </div>
    )
}
