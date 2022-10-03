import React, {useEffect} from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import { motion } from "framer-motion"
import FadeSlide from "../../components/flip-move/fadeSlide";
import Lottie from "react-lottie";
import animationData from "/public/circle-data.json";
import BorderSlideButton from "../../components/general-ui/buttons/border-slide-button";
import {useRef} from "react";
import useOnScreen from "../../components/useOnScreen";

export default function About() {

    useEffect(() => {
        if(isVisible || isVisible2){
            setTimeout(()=>{
                if(document.getElementById('portrait-desktop') != null){
                    document.getElementById('portrait-desktop').classList.add('opacity-100')
                    document.getElementById('portrait-desktop').classList.remove('opacity-0')
                    document.getElementById('portrait-desktop').classList.add('-translate-x-10')
                    document.getElementById('portrait-desktop').classList.add('-translate-y-10')
                    document.getElementById('portrait-mobile').classList.add('-translate-x-6')
                    document.getElementById('portrait-mobile').classList.add('-translate-y-6')
                }
            },750)
        }
    })

    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const ref2 = useRef()
    const isVisible2 = useOnScreen(ref2)

    return (
        <div className={'pt-24 flex justify-center h-full'}>
            <div className={' mx-10 md:mx-20 w-[80rem]'}>
                <FadeSlide delay={100}>
                    <h1 className={'text-5xl md:text-8xl w-full'}>
                        / About
                    </h1>
                    <div className={'flex pt-6 pl-6 md:p-12 md:mt-12'}>
                        <h2 className={'text-3xl md:text-5xl text-transparent bg-clip-text w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}>Who <span className={'inline-block'}>am I? <span className={'inline-block text-zinc-700'}> 👨‍💻</span></span></h2>
                    </div>
                </FadeSlide>
                <div className={'relative'}>
                    <div className={' md:mt-10 grid justify-center'}>
                        <div ref={ref2} className={'lg:hidden h-full flex justify-center relative p-8 ml-4 pt-16 relative'}>
                            <div className={' rounded-3xl border border-zinc-400 dark:border-zinc-600'}>
                                <div id={'portrait-mobile'} className={'group shadow-2xl rounded-3xl border border-zinc-400 dark:border-zinc-600 relative overflow-hidden bg-white transition ease-in-out duration-500'}>
                                    <div className={'absolute left-0 z-50 inset-0 flex grid items-center text-4xl text-white font-asap font-bold w-1/2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 p-4'}>
                                        REYMOND PAMELAR
                                        <div className={'text-xl'}>
                                            SDSU 2021
                                        </div>
                                    </div>
                                    <img src={'portrait.png'} alt={'portrait'} className={'relative z-10 max-h-[30rem] group-hover:brightness-50 transition ease-in-out duration-300'}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div key={'quote1'} className={'xl:text-lg grid lg:grid-cols-2 px-2 md:p-10'}>
                                <div className={'w-full'}>
                                    <FadeSlide className={'space-y-6 p-2 md:pr-20 md:text-lg'}>
                                        <div>
                                            Nice to meet you! 👋🏽
                                        </div>
                                        <div>
                                            I am <span className={'font-bold'}>Reymond Pamelar</span>
                                        </div>
                                        <div>
                                            Raised in San Diego, CA, I have always had an interest in computer science. After graduating San Diego State University, I found my niche in Web Development and even dipped my toe into Web3 technologies.
                                        </div>
                                        <div>
                                            Interweaving my creativity with problem solving is what I do best!
                                        </div>
                                        <div>
                                            I love to create <span className={'font-bold'}>fluid</span> and <span className={'font-bold'}>dynamic</span> web applications while keeping <span className={'font-bold'}>responsiveness</span> and <span className={'font-bold'}>accessibility</span> in mind.
                                        </div>
                                    </FadeSlide>
                                </div>
                                <div ref={ref} className={'hidden h-full lg:flex justify-end items-end relative'}>
                                    <div className={''}>
                                        <div className={' rounded-3xl border border-zinc-400 dark:border-zinc-600'}>
                                            <div id={'portrait-desktop'} className={'group relative shadow-xl rounded-3xl border border-zinc-400 dark:border-zinc-600 relative overflow-hidden bg-white transition ease-in-out duration-500 opacity-0'}>
                                                <div className={'absolute text-white left-0 z-50 inset-0 flex grid items-center text-4xl font font-asap font-bold w-1/2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 p-4'}>
                                                    REYMOND PAMELAR
                                                    <div className={'text-xl'}>
                                                        SDSU 2021
                                                    </div>
                                                </div>
                                                <img src={'portrait.png'} alt={'portrait'} className={'relative z-10 h-[30rem] group-hover:brightness-50 transition ease-in-out duration-700'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
