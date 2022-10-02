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
import TextInput from "../../components/general-ui/form/text-input";
import Cube from "../../components/threeJS/cube";
import MiddleSlideButton from "../../components/general-ui/buttons/middle-slide-button";
import AccordionVertical from "../../components/flip-move/AccordionVertical";

export default function Contact() {

    return (
        <div className={'pt-24 flex justify-center text-zinc-600 dark:text-zinc-300 bg-zinc-300 dark:bg-black h-[55rem] md:h-[65rem] relative'}>
            <div className={' mx-10 md:mx-20 w-[80rem] relative'}>
                <div className={'absolute inset-y-20 -right-[32rem] md:-right-20'}>
                    <Cube/>
                </div>
                <FadeSlide delay={100} className={'flex justify-center'}>
                    <h1 className={'text-5xl md:text-8xl w-full pb-12'}>
                        / Contact
                    </h1>
                </FadeSlide>
                <div className={'grid md:grid-cols-2'}>
                    <AccordionVertical className={'pl-6 md:p-12 space-y-10 z-50'}>
                        <h2 className={'md:text-6xl text-transparent bg-clip-text w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate '}>Lets Connect!</h2>
                        <h5 className={'text-base md:text-lg'}>
                            I am currently looking for a spot amongst an <span className={'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}>innovative</span> and <span className={'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}>creative</span> team; especially those working to evolve <span className={'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}>Web3</span>!
                        </h5>
                        <h5 className={'text-base md:text-lg'}>
                            Let&apos;s have a conversation on new opportunities for both you and I!
                        </h5>
                        <h5 className={'pt-20 text-base md:text-lg'}>
                            reymondpamelar@gmail.com
                        </h5>
                        <div className={' pb-10 flex '}>
                            <div className={'flex gap-10 font-asap md:text-zinc-300 dark:text-gray-400'}>
                                <MiddleSlideButton onClick={() => window.open('https://github.com/reymondpamelar', '_blank', 'noopener,noreferrer')}>
                                    <div className={'flex items-center gap-2 text-zinc-600 dark:text-zinc-300'}>
                                        <Icon.GitHub className={'w-4'}/> GITHUB
                                    </div>
                                </MiddleSlideButton>
                                <MiddleSlideButton onClick={() => window.open('https://linkedin.com/in/reymondpamelar', '_blank', 'noopener,noreferrer')}>
                                    <div className={'flex items-center gap-2 text-zinc-600 dark:text-zinc-300'}>
                                        <Icon.Linkedin className={'w-4'}/> LINKEDIN
                                    </div>
                                </MiddleSlideButton>
                            </div>
                        </div>
                    </AccordionVertical>
                </div>
            </div>

        </div>
    )
}
