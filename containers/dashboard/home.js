import React from "react";
import 'animate.css';
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { motion } from "framer-motion"
import * as Icon from 'react-feather'
import BorderSlideButton from "../../components/general-ui/buttons/border-slide-button";
import AccordionVertical from "../../components/flip-move/AccordionVertical";
import TriangularPrism from "../../components/threeJS/triangular-prism";
import MiddleSlideButton from "../../components/general-ui/buttons/middle-slide-button";
import animationData from "/public/40587-scroll.json";
import Lottie from "react-lottie";

export default function Home(props) {
    const particlesInit = (main) => {
        return loadTrianglesPreset(main)
    };

    const particlesLoaded = (container) => {

    };


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
                <div className={'relative z-50 px-6 md:px-10 max-w-[80rem]'}>
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
                            <h1 className={'text-2xl md:text-3xl md:text-zinc-300'}>
                                <div className={' mix-blend-difference'}>
                                    Front-end Developer
                                </div>
                            </h1>
                            <div className={'mt-10 md:text-zinc-300 dark:text-gray-400'}>
                                <MiddleSlideButton onClick={() => props.setStep(2)}>
                                    VIEW PROJECTS
                                </MiddleSlideButton>
                            </div>
                        </div>
                    </AccordionVertical>
                </div>
                <div className={' w-screen h-screen fixed flex justify-center items-end'}>
                    <div className={' dark:invert w-[80rem]'}>
                        <div className={'w-[18rem] md:w-[20rem] relative top-12 -left-[7rem] md:-left-[8rem]'}>
                            <Lottie
                                options={defaultOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex relative h-screen fixed top-0'}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}
                >
                    <Particles
                        className={'hidden md:block h-full w-full top-0'}
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            fullScreen: { enable: true },
                            fpsLimit: 60,
                            particles: {
                                number: {
                                    value: 60,
                                    density: {
                                        enable: true,
                                        value_area: 800
                                    }
                                },
                                color: {
                                    value: "#6B7280",
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#6B7280"
                                    },
                                    polygon: {
                                        nb_sides: 5
                                    },
                                    image: {
                                        src: "https://cdn.matteobruni.it/images/particles/github.svg",
                                        width: 100,
                                        height: 100
                                    }
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 3,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 3,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 20,
                                        size_min: 0.1,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 100,
                                    opacity: 0.4,
                                    width: 1,
                                    triangles: {
                                        enable: true,
                                        color: "#6B7280",
                                        opacity: 0.1
                                    }
                                },
                                move: {
                                    enable: true,
                                    speed: 2,
                                    direction: "none",
                                    random: false,
                                    straight: false,
                                    out_mode: "out",
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode: "push"
                                    },
                                    resize: true
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 1
                                        }
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 40,
                                        duration: 2,
                                        opacity: 0.8,
                                        speed: 3
                                    },
                                    repulse: {
                                        distance: 100
                                    },
                                    push: {
                                        particles_nb: 4
                                    },
                                    remove: {
                                        particles_nb: 2
                                    }
                                }
                            },
                            retina_detect: true,
                            background: {
                                color: "#ffffff",
                                opacity:"0%",
                                image: "",
                                position: "50% 50%",
                                repeat: "no-repeat",
                                size: "cover"
                            }}}
                    />
                </motion.div>
                <div className={'absolute w-full h-full bg-gradient-to-t from-transparent via-transparent to-mainWhite dark:to-zinc-800 transition ease-in-out duration-500'}>

                </div>
            </div>
        </div>
    )
}
