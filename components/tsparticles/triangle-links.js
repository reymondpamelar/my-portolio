import {motion} from "framer-motion";
import Particles from "react-tsparticles";
import React from "react";
import {loadTrianglesPreset} from "tsparticles-preset-triangles";

export default function TriangleLinks(){
    const particlesInit = (main) => {
        return loadTrianglesPreset(main)
    };

    const particlesLoaded = (container) => {

    };
    return (
        <div className={'flex relative h-screen fixed top-0'}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 3 }}
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
    )
}