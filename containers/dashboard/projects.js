import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import ProjectTemplate from "../../components/project-template";
import FadeSlide from "../../components/flip-move/fadeSlide";

export default function Projects() {

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
                <FadeSlide className={'flex overflow-scroll p-20 md:p-32 gap-32'}>
                    <div>
                        <ProjectTemplate
                            number={'01'}
                            title={'Portfolio'}
                            techUsed={'Next.js | TailwindCSS'}
                            github={''}
                            link={''}
                            imageSrc={'portfolio.png'}
                            titleClassName={'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'}
                        />
                    </div>
                    <div>
                        <ProjectTemplate
                            number={'02'}
                            title={'LINE UP!'}
                            techUsed={'React.js | TailwindCSS | Electron.js | Node.js | Express.js'}
                            github={''}
                            link={''}
                            imageSrc={'line-up.png'}
                            titleClassName={'bg-clip-text text-transparent bg-gradient-to-r from-[#ECB984] via-[#D58258] to-[#963A2F] background-animate'}
                        />
                    </div>
                    <div>
                        <ProjectTemplate
                            number={'03'}
                            title={'Privatyze '}
                            techUsed={'Next.js | Redux | TailwindCSS'}
                            github={''}
                            link={''}
                            imageSrc={'Privatyze.png'}
                            titleClassName={'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pblue to-pgreen background-animate'}
                        />
                    </div>
                </FadeSlide>
                <div className={'flex items-center text-lg absolute bottom-4 right-6 font-asap tracking-widest uppercase animate__animated animate-bounceRight'}>
                    scroll
                    <Icon.ChevronRight/>
                </div>
            </div>
        </div>
    )
}
