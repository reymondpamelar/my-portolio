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

export default function Contact() {

    return (
        <div className={'pt-24 flex justify-center text-zinc-600 dark:text-zinc-300 bg-zinc-300 dark:bg-black h-[60rem] relative'}>
            <div className={' mx-10 md:mx-20 w-[80rem] relative'}>
                <div className={'absolute inset-y-20 -right-[30rem] md:right-0'}>
                    <Cube/>
                </div>
                <FadeSlide delay={100}>
                    <h1 className={'text-5xl md:text-8xl w-full pb-16'}>
                        / Contact
                    </h1>
                </FadeSlide>
                <div className={'grid md:grid-cols-2'}>
                    <div className={'p-10 md:p-12 space-y-10 z-50'}>
                        <h1 className={'text-transparent bg-clip-text w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate '}>Lets Connect!</h1>
                        <h5 className={''}>
                            I am currently looking for a spot amongst an innovative and creative team!
                        </h5>
                        <h5 className={''}>
                            Let's have a conversation on new opportunities for both you and I!
                        </h5>
                        <h5 className={'pt-20'}>
                            reymondpamelar@gmail.com
                        </h5>
                        <div className={' pb-10 flex'}>
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
                    </div>
                </div>
            </div>

        </div>
    )
}
