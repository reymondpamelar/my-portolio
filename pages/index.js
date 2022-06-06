import DashboardLayout from "../layouts/dashboard";
import 'animate.css';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

export default function Home() {
    const particlesInit = (main) => {
        return loadTrianglesPreset(main)
    };

    const particlesLoaded = (container) => {

    };

    return (
        <DashboardLayout>
            <div>
                <Particles
                    className={'fixed h-screen w-screen'}
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
            </div>
            <div className={'md:flex items-center justify-center md:justify-start md:h-[50rem] p-8'}>
                <div className={'flex items-center justify-center md:justify-start pr-4'}>
                    <img src={'portrait.png'} className={'z-10 object-cover object-top rounded-full h-40 w-40'}/>
                </div>
                <h1 className={'border-l pl-4 text-xl md:text-5xl'}>
                    <div className={'animate__animated animate__fadeInRightBig'}>
                        Nice to meet you!
                    </div>
                    <div className={'animate__animated animate__fadeInDown animate__delay-1s'}>
                        I'm Reymond Pamelar,
                    </div>
                    <div className={'animate__animated animate__fadeInDown animate__delay-2s'}>
                        Web Developer
                    </div>
                </h1>
            </div>
            <div className={'md:flex items-center justify-center md:justify-start md:h-[50rem] p-8'}>
                <div className={'flex items-center justify-center md:justify-start pr-4'}>
                    <img src={'portrait.png'} className={'z-10 object-cover object-top rounded-full h-40 w-40'}/>
                </div>
                <h1 className={'border-l pl-4 text-xl md:text-5xl'}>
                    <div className={'animate__animated animate__fadeInRightBig'}>
                        Nice to meet you!
                    </div>
                    <div className={'animate__animated animate__fadeInDown animate__delay-1s'}>
                        I'm Reymond Pamelar,
                    </div>
                    <div className={'animate__animated animate__fadeInDown animate__delay-2s'}>
                        Web Developer
                    </div>
                </h1>
            </div>
            <div className={'md:flex items-center justify-center md:justify-start md:h-[50rem] p-8'}>
                <div className={'flex items-center justify-center md:justify-start pr-4'}>
                    <img src={'portrait.png'} className={'z-10 object-cover object-top rounded-full h-40 w-40'}/>
                </div>
                <h1 className={'border-l pl-4 text-xl md:text-5xl'}>
                    <div className={'animate__animated animate__fadeInRightBig'}>
                        Nice to meet you!
                    </div>
                    <div className={'animate__animated animate__fadeInDown animate__delay-1s'}>
                        I'm Reymond Pamelar,
                    </div>
                    <div className={'animate__animated animate__fadeInDown animate__delay-2s'}>
                        Web Developer
                    </div>
                </h1>
            </div>

        </DashboardLayout>
    )
}
