import React from "react";
import 'animate.css';
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { motion } from "framer-motion"
import * as Icon from 'react-feather'

export default function Intro() {
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
        <div>
            <div className={'ml-4'}>
                <h1 className={'relative top-24 text-8xl z-20 pl-4'}>
                    Home
                </h1>
            </div>
            <div className={'flex items-center relative md:justify-start h-screen'}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}
                    className={''}
                >
                    <Particles
                        className={'absolute h-full w-full top-0'}
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
                                    value: "#0979ff",
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#000000"
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
                                        color: "#0979ff",
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
                                    onhover: {
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
                <div className={'absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-zinc-800'}>

                </div>
                <div className={'hidden flex items-center justify-center md:justify-start md:pr-4 md:pl-6 pt-8 md:pt-0'}>
                    <img src={'portrait-remove-bg.png'} className={'z-10 bg-black border border-zinc-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-opacity-25  object-cover object-top rounded-full h-48 w-48'}/>
                </div>
                <div className={'relative pl-10 md:pl-20'}>
                    <h1 className={' text-xl text-3xl md:text-5xl'}>
                        <div className={'animate__animated animate__fadeInRight'}>
                            <span className={'text-pblue'}> Reymond Pamelar</span>
                        </div>
                        <div className={'animate__animated animate__fadeInRight animate__delay-1s '}>
                            Front-end Web Developer
                        </div>
                    </h1>
                    <div className={'animate__animated animate__fadeInDown text-lg animate__delay-2s'}>
                        Welcome to my portfolio.
                    </div>
                    <div className={'cursor-pointer flex font-bold mt-4 absolute -bottom-20'}>
                        <div className={'p-4 px-10 shadow-xl bg-zinc-500 border border-zinc-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-l-xl flex items-center justify-center'}>About</div>
                        <div className={'bg-pblue flex justify-center items-center p-4 rounded-r-xl text-white'}>
                            <Icon.ChevronRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
