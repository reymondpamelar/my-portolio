import React, {useEffect} from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import { motion } from "framer-motion"
import FadeSlide from "../../components/flip-move/fadeSlide";
import Lottie from "react-lottie";
import animationData from "/public/circle-data.json";
import BorderSlideButton from "../../components/general-ui/buttons/border-slide-button";

export default function About() {

    useEffect(() => {
        setTimeout(()=>{
            if(document.getElementById('portrait-desktop') != null){
                document.getElementById('portrait-desktop').classList.add('-translate-x-10')
                document.getElementById('portrait-desktop').classList.add('-translate-y-10')
                document.getElementById('portrait-mobile').classList.add('-translate-x-6')
                document.getElementById('portrait-mobile').classList.add('-translate-y-6')
            }
        },750)
    },[])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={'py-24'}>
            <div className={'px-4'}>
                <h1 className={'text-5xl md:text-8xl pl-8'}>
                    / About
                </h1>
                <div className={'text-lg md:mt-32 pb-10 mb-20'}>
                    <div className={'md:hidden h-full flex justify-center relative p-8 ml-4 relative'}>
                        <div className={' rounded-3xl border border-zinc-500'}>
                            <div id={'portrait-mobile'} className={'group shadow-2xl rounded-3xl border border-zinc-500 relative overflow-hidden bg-white transition ease-in-out duration-500'}>
                                <div className={'absolute left-0 z-50 inset-0 flex grid items-center text-4xl text-white font-asap font-bold w-1/2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 p-4'}>
                                    REYMOND PAMELAR
                                    <div className={'text-xl'}>
                                        SDSU 2021
                                    </div>
                                </div>
                                <img src={'portrait.png'} alt={'portrait'} className={'relative z-10 group-hover:brightness-50 transition ease-in-out duration-300'}/>
                            </div>
                        </div>
                    </div>
                    <FadeSlide>
                        <div key={'quote1'} className={' grid md:grid-cols-2 md:px-10'}>
                            <FadeSlide className={'space-y-6 p-4 xl:text-2xl xl:pr-20'}>
                                <h3>
                                    Nice to meet you! 👋🏽
                                </h3>
                                <div>
                                    I am <span className={'font-bold'}>Reymond Pamelar</span>
                                </div>
                                <div>
                                    Raised in sunny San Diego, CA, I have always had an interest in computer science. After graduating San Diego State University, I found a great interest in Web Development.
                                </div>
                                <div>
                                    Interweaving my creativity with problem solving is what I do best!
                                </div>
                                <div>
                                    I love to create <span className={'font-bold'}>fluid</span> and <span className={'font-bold'}>dynamic</span> web applications while keeping <span className={'font-bold'}>responsiveness</span> and <span className={'font-bold'}>accessibility</span> in mind.
                                </div>
                                <div>
                                    However, I do like to explore outside the boundaries of a browser.
                                </div>
                                <div className={'flex gap-10 font-asap'}>
                                    <BorderSlideButton onClick={() => window.open('https://github.com/reymondpamelar', '_blank', 'noopener,noreferrer')}>
                                        <div className={'flex items-center gap-2'}>
                                            <Icon.GitHub className={'w-4'}/> GITHUB
                                        </div>
                                    </BorderSlideButton>
                                    <BorderSlideButton onClick={() => window.open('https://linkedin.com/in/reymondpamelar', '_blank', 'noopener,noreferrer')}>
                                        <div className={'flex items-center gap-2'}>
                                            <Icon.Linkedin className={'w-4'}/> LINKEDIN
                                        </div>
                                    </BorderSlideButton>
                                </div>
                            </FadeSlide>
                            <div className={'hidden h-full md:flex justify-center items-end relative'}>
                                <div className={''}>
                                    <div className={' rounded-3xl border border-zinc-400'}>
                                        <div id={'portrait-desktop'} className={'group relative shadow-xl rounded-3xl border border-zinc-400 relative overflow-hidden bg-white transition ease-in-out duration-500'}>
                                            <div className={'absolute text-white left-0 z-50 inset-0 flex grid items-center text-4xl font font-asap font-bold w-1/2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 p-4'}>
                                                REYMOND PAMELAR
                                                <div className={'text-xl'}>
                                                    SDSU 2021
                                                </div>
                                            </div>
                                            <img src={'portrait.png'} alt={'portrait'} className={'relative z-10 xl:h-[50rem] h-[30rem] group-hover:brightness-50 transition ease-in-out duration-700'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeSlide>
                </div>
            </div>

        </div>
    )
}
