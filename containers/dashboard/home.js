import React from "react";
import 'animate.css';
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { motion } from "framer-motion"
import * as Icon from 'react-feather'
import FadeSlide from "../../components/flip-move/fadeSlide";

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
            <div className={'fixed h-screen w-screen flex items-center grid z-10'}>
                <div className={'relative pl-10 md:pl-20'}>
                    <FadeSlide>
                        <h1 className={'text-3xl md:text-7xl'}>
                            <div className={''}>
                                <span className={'text-pblue'}> Reymond Pamelar</span>
                            </div>
                        </h1>
                        <h1 className={'text-3xl md:text-7xl'}>
                            <div className={' '}>
                                Front-end Web Developer
                            </div>
                        </h1>
                        <button onClick={() => props.setStep(2)} className={'cursor-pointer mt-10 font-asap tracking-widest text-lg group overflow-hidden'}>
                            VIEW PROJECTS
                            <div className={'border-b border-zinc-700 dark:border-white w-full -translate-x-20 transition ease-in-out duration-300 group-hover:translate-x-0'}>

                            </div>
                        </button>
                    </FadeSlide>
                </div>
                <div className={'absolute bottom-6 right-6 flex gap-6'}>
                    <div className={''}>
                        <Icon.GitHub/>
                    </div>
                    <div className={''}>
                        <Icon.Linkedin/>
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
                        className={'absolute h-full w-full top-0'}
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
                <div className={'absolute hidden dark:block w-full h-full bg-gradient-to-b from-transparent via-transparent to-zinc-800'}>

                </div>
            </div>
        </div>
    )
}
