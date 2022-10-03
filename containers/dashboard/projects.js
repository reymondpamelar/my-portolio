import React from "react";
import 'animate.css';
import ProjectTemplate from "../../components/project-template";
import FadeSlide from "../../components/flip-move/fadeSlide";
import {useHorizontalScroll} from "../../components/general-ui/scroll/horizontal-scroll";
import Lottie from "react-lottie";
import animationData from "../../public/40587-scroll.json";

export default function Projects() {
    const scrollRef = useHorizontalScroll()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <div className={'pt-24 pb-24 h-[60rem] md:min-h-[70rem]'}>
            <FadeSlide delay={100} className={'flex justify-center'}>
                <h1 className={'text-5xl md:text-8xl w-[80rem] mx-10 md:mx-20 pb-10 text-left'}>
                    / Projects
                    <div className={'flex mt-12 pt-6 pl-6 md:p-12'}>
                        <h2 className={'text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate '}>Not <span className={'inline-block'}>just ideas...<span className={'inline-block text-zinc-700'}> 👨‍💻</span></span></h2>
                    </div>
                </h1>
            </FadeSlide>
            <div className={'relative'}>
                <div className={'relative flex justify-center'}>
                    <div ref={scrollRef} className={'flex overflow-scroll relative px-20'}>
                        <FadeSlide delay={700} className={'flex p-20 px-16 md:p-32 gap-24 md:gap-32'}>
                            <div className={''}>
                                <ProjectTemplate
                                    number={'01'}
                                    title={'Portfolio'}
                                    techUsed={'Next.js | TailwindCSS | tsparticles | three.js'}
                                    github={'https://github.com/reymondpamelar/my-portolio'}
                                    imageSrc={'portfolio.png'}
                                    titleClassName={'text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}
                                />
                            </div>
                            <div>
                                <ProjectTemplate
                                    number={'02'}
                                    title={'LINE UP!'}
                                    techUsed={'React.js | TailwindCSS | Electron.js | Node.js | Express.js'}
                                    github={'https://github.com/reymondpamelar/LineUP'}
                                    link={'https://line-up-one.vercel.app/'}
                                    imageSrc={'line-up.png'}
                                    bgColor={'bg-[#D58258]'}
                                    titleClassName={'text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#ECB984] via-[#D58258] to-[#963A2F] background-animate'}
                                />
                            </div>
                            <div>
                                <ProjectTemplate
                                    number={'03'}
                                    title={'Privatyze '}
                                    techUsed={'Next.js | Redux | TailwindCSS'}
                                    link={'https://app.privatyze.io/login'}
                                    imageSrc={'Privatyze.png'}
                                    titleClassName={'text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pblue to-pgreen background-animate'}
                                />
                            </div>
                        </FadeSlide>
                    </div>
                    <div className={'-z-20 flex items-center text-lg absolute -bottom-20 -right-10 font-asap tracking-widest uppercase animate__animated animate'}>
                        <div className={' dark:invert rotate-90'}>
                            <div className={'w-[16rem] md:w-[20rem] rotate-180'}>
                                <Lottie
                                    options={defaultOptions}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
