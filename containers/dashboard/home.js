import React from "react";
import 'animate.css';
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import * as Icon from 'react-feather'
import AccordionVertical from "../../components/flip-move/AccordionVertical";
import TriangularPrism from "../../components/threeJS/triangular-prism";
import MiddleSlideButton from "../../components/general-ui/buttons/middle-slide-button";
import animationData from "/public/40587-scroll.json";
import Lottie from "react-lottie";
import TriangleLinks from "../../components/tsparticles/triangle-links";

export default function Home(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <div content={''}>

            <div className={'fixed h-screen w-screen flex justify-center items-center grid z-50'}>
                <TriangularPrism/>
                <div className={'relative z-50 px-6 md:px-10 max-w-[80rem] mix-blend-difference'}>
                    <AccordionVertical delay={3000} className={'text-center'} >
                        <div className={'md:hidden pb-10 flex justify-center'}>
                            <div className={'flex gap-10 font-asap md:text-zinc-300 dark:text-gray-400'}>
                                <MiddleSlideButton onClick={() => window.open('https://github.com/reymondpamelar', '_blank', 'noopener,noreferrer')}>
                                    <div className={'flex items-center gap-2'}>
                                        <Icon.GitHub className={'w-4'}/> GITHUB
                                    </div>
                                </MiddleSlideButton>
                                <MiddleSlideButton onClick={() => window.open('https://linkedin.com/in/reymondpamelar', '_blank', 'noopener,noreferrer')}>
                                    <div className={'flex items-center gap-2'}>
                                        <Icon.Linkedin className={'w-4'}/> LINKEDIN
                                    </div>
                                </MiddleSlideButton>
                            </div>
                        </div>
                        <h1 className={'text-3xl md:text-7xl uppercase md:tracking-widest'}>
                            <div className={''}>
                                <span className={'text-transparent bg-clip-text w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}> Reymond Pamelar</span>
                            </div>
                        </h1>
                        <div className={'relative top-20 md:top-0'}>
                            <h1 className={'text-2xl md:text-3xl md:text-zinc-300 '}>
                                <div className={''}>
                                    Front-end Developer
                                </div>
                            </h1>
                            <div className={'mt-4 md:text-zinc-300 dark:text-gray-400 mix'}>
                                <button onClick={() => document.getElementById('Projects').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})} className={'cursor-pointer relative font-asap tracking-widest text-lg group overflow-hidden'}>
                                    VIEW PROJECTS
                                    <div className={'pt-2'}>
                                        <span className="absolute -bottom-1 left-1/2 w-3 h-[0.3rem] bg-white group-hover:w-1/2 group-hover:transition-all ease-in-out duration-300"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-3 h-[0.3rem] bg-white group-hover:w-1/2 group-hover:transition-all ease-in-out duration-300"></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </AccordionVertical>
                </div>
                <div className={' w-screen h-screen fixed flex justify-center items-end -z-20'}>
                    <div className={' dark:invert w-[80rem]'}>
                        <div className={'w-[16rem] md:w-[20rem] relative top-12 -left-[7rem] md:-left-[8rem]'}>
                            <Lottie
                                options={defaultOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <TriangleLinks/>
        </div>
    )
}
