import React, {useEffect} from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import { motion } from "framer-motion"
import FadeSlide from "../../components/flip-move/fadeSlide";

export default function About() {

    useEffect(() => {
        setTimeout(()=>{
            document.getElementById('portrait-desktop').classList.add('-translate-x-6')
            document.getElementById('portrait-desktop').classList.add('-translate-y-6')
            document.getElementById('portrait-mobile').classList.add('-translate-x-6')
            document.getElementById('portrait-mobile').classList.add('-translate-y-6')
        },750)
    },[])

    return (
        <div className={'pt-24'}>
            <div className={'px-4'}>
                <h1 className={'text-6xl md:text-8xl pl-4'}>
                    About
                </h1>
                <div className={'text-lg md:mt-32 pb-10'}>
                    <div className={'md:hidden h-full flex justify-center relative p-8 ml-4 relative'}>
                        <div className={' rounded-3xl border border-zinc-500'}>
                            <div id={'portrait-mobile'} className={'shadow-2xl rounded-3xl border border-zinc-500 relative overflow-hidden bg-white transition ease-in-out duration-500'}>
                                <img src={'portrait.png'} alt={'portrait'} className={'relative z-10'}/>
                            </div>
                        </div>
                    </div>
                    <FadeSlide>
                        <div key={'quote1'} className={' grid md:grid-cols-2 mb-20 md:pl-10'}>
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
                            <div className={'hidden h-full md:flex justify-center relative'}>
                                <div className={''}>
                                    <div className={' rounded-3xl border border-zinc-500'}>
                                        <div id={'portrait-desktop'} className={'shadow-xl rounded-3xl border border-zinc-500 relative overflow-hidden bg-white transition ease-in-out duration-500'}>
                                            <img src={'portrait.png'} alt={'portrait'} className={'relative z-10 h-[30rem]'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div key={'quote2'} className={'grid my-20 rounded-xl md:px-10'}>
                            <div className={' rounded-xl p-4'}>
                                <div className={'border-b flex grid grid-cols-2 justify-center rounded-t-xl p-3'}>
                                    <h4>
                                        Languages
                                    </h4>
                                    <div className={'flex justify-end'}>
                                        <Icon.Code size={50}/>
                                    </div>
                                </div>
                                <ul className={'flex flex-wrap text-center justify-center rounded-b-xl p-3'}>
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
                            <div className={' rounded-xl p-4'}>
                                <div className={'border-b flex grid grid-cols-2 justify-center rounded-t-xl p-3'}>
                                    <h4>
                                        Frameworks
                                    </h4>
                                    <div className={'flex justify-end'}>
                                        <Icon.GitBranch size={50}/>
                                    </div>
                                </div>
                                <ul className={'flex flex-wrap text-center justify-center rounded-b-xl p-3'}>
                                    <li className={'px-4 grow'}>Next.js</li>
                                    <li className={'px-4 grow'}>React.js</li>
                                    <li className={'px-4 grow'}>React Native</li>
                                    <li className={'px-4 grow'}>TailwindCSS</li>
                                    <li className={'px-4 grow'}>Express.js</li>
                                </ul>
                            </div>
                            <div className={' rounded-xl p-4'}>
                                <div className={'border-b flex grid grid-cols-2 justify-center rounded-t-xl p-3'}>
                                    <h4>
                                        Developer Tools
                                    </h4>
                                    <div className={'flex justify-end'}>
                                        <Icon.Tool size={50}/>
                                    </div>
                                </div>
                                <ul className={'flex flex-wrap text-center justify-center rounded-b-xl p-3'}>
                                    <li className={'px-4 grow'}>Node.js</li>
                                    <li className={'px-4 grow'}>Ceramic</li>
                                    <li className={'px-4 grow'}>Metamask</li>
                                    <li className={'px-4 grow'}>React Redux</li>
                                    <li className={'px-4 grow'}>Storybook</li>
                                    <li className={'px-4 grow'}>Miro</li>
                                    <li className={'px-4 grow'}>Figma</li>
                                    <li className={'px-4 grow'}>MongoDB</li>
                                    <li className={'px-4 grow'}>Postman</li>
                                    <li className={'px-4 grow'}>Git</li>
                                    <li className={'px-4 grow'}>Unity Engine</li>
                                </ul>
                            </div>
                        </div>
                    </FadeSlide>
                </div>
            </div>

        </div>
    )
}
