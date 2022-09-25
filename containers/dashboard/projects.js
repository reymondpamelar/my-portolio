import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import ProjectTemplate from "../../components/project-template";
import FadeSlide from "../../components/flip-move/fadeSlide";
import {useHorizontalScroll} from "../../components/general-ui/scroll/horizontal-scroll";

export default function Projects() {
    const scrollRef = useHorizontalScroll()
    return (
        <div className={'py-24 relative'}>
            <div className={'pl-4'}>
                <h1 className={'text-5xl md:text-8xl pl-8'}>
                    / Projects
                </h1>
            </div>
            <div className={'relative mt-20'}>
                <div className={'flex items-center text-lg absolute -top-10 right-6 font-asap tracking-widest uppercase animate-bounceRight'}>
                    scroll
                    <Icon.ChevronRight/>
                </div>
                <div ref={scrollRef} className={'flex overflow-scroll pl-10 relative'}>
                    <FadeSlide className={'flex p-20 px-16 md:p-32 gap-24 md:gap-32'}>
                        <div>
                            <ProjectTemplate
                                number={'01'}
                                title={'Portfolio'}
                                techUsed={'Next.js | TailwindCSS'}
                                github={'https://github.com/reymondpamelar/my-portolio'}
                                link={'https://reymond.dev/'}
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
                <div className={'flex items-center text-lg absolute bottom-4 right-6 font-asap tracking-widest uppercase animate__animated animate-bounceRight'}>
                    scroll
                    <Icon.ChevronRight/>
                </div>
            </div>
        </div>
    )
}
