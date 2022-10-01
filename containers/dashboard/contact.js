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

export default function Contact() {

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
        <div className={'pt-24 flex justify-center bg-black'}>
            <div className={' mx-10 md:mx-20 w-[80rem]'}>
                <FadeSlide delay={100}>
                    <h1 className={'text-5xl md:text-8xl w-full'}>
                        / Contact
                    </h1>
                </FadeSlide>
                <div className={'relative bottom-20'}>
                    <div className={' md:mt-32 pb-10 grid justify-center'}>
                        <div key={'quote1'} className={'xl:text-lg grid md:px-10'}>
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
    )
}
