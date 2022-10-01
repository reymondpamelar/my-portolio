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

export default function Contact() {

    return (
        <div className={'pt-24 flex justify-center text-zinc-600 dark:text-zinc-300 bg-zinc-300 dark:bg-black h-[60rem] relative'}>
            <div className={' mx-10 md:mx-20 w-[80rem]'}>
                <div className={'absolute inset-0'}>
                    <Cube/>
                </div>
                <FadeSlide delay={100}>
                    <h1 className={'text-5xl md:text-8xl w-full pb-20'}>
                        / Contact
                    </h1>
                </FadeSlide>
                <div className={'grid md:grid-cols-2'}>
                    <div className={'mt-20 space-y-4 z-50'}>
                        <h1 className={'text-transparent bg-clip-text w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}>Lets Connect!</h1>
                        <div className={'space-y-10 pr-20'}>
                            <TextInput
                                placeholder={'First name'}
                            />
                            <TextInput
                                placeholder={'Last name'}
                            />
                            <TextInput
                                placeholder={'Email Address'}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
