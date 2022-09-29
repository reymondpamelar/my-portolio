import React from "react";
import 'animate.css';
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { motion } from "framer-motion"
import * as Icon from 'react-feather'
import BorderSlideButton from "../../components/general-ui/buttons/border-slide-button";
import AccordionVertical from "../../components/flip-move/AccordionVertical";

export default function Home(props) {
    const particlesInit = (main) => {
        return loadTrianglesPreset(main)
    };

    const particlesLoaded = (container) => {

    };

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <div content={''}>
            <div className={'fixed h-screen w-screen flex items-center grid z-50'}>
                <div className={'relative z-50 px-10'}>
                    <AccordionVertical delay={3000} className={'text-center'} >
                        <div className={'pb-10 flex justify-center'}>
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
                        </div>
                        <h1 className={'text-3xl md:text-7xl'}>
                            <div className={''}>
                                <span className={'text-transparent bg-clip-text w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}> Reymond Pamelar</span>
                            </div>
                        </h1>
                        <h1 className={'text-3xl md:text-7xl'}>
                            <div className={' '}>
                                Front-end Web Developer
                            </div>
                        </h1>
                        <div className={'mt-10'}>
                            <BorderSlideButton onClick={() => props.setStep(2)}>
                                VIEW PROJECTS
                            </BorderSlideButton>
                        </div>
                    </AccordionVertical>
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
                        className={' h-full w-full top-0'}
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            fullScreen: { enable: false },
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
