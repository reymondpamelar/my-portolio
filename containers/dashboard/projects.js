import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import ProjectTemplate from "../../components/project-template";
import FadeSlide from "../../components/flip-move/fadeSlide";

export default function Projects() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <div className={'pt-24 relative'}>
            <div className={'pl-4'}>
                <h1 className={'text-5xl md:text-8xl pl-8'}>
                    / Projects
                </h1>
            </div>
            <div className={'relative'}>
                <div className={'flex items-center text-lg absolute top-0 right-10 font-asap tracking-widest uppercase animate__animated animate__pulse animate__slow animate__infinite'}>
                    scroll
                    <Icon.ChevronRight/>
                </div>
                <FadeSlide className={'flex overflow-scroll p-20 md:p-32 gap-32'}>
                    <ProjectTemplate
                        title={'LINE UP!'}
                        techUsed={'React.js | TailwindCSS | Electron.js | Node.js | Express.js'}
                        github={''}
                        link={''}
                        imageSrc={'line-up.png'}
                    />

                    <ProjectTemplate
                        title={'Privatyze '}
                        techUsed={'Next.js | Redux | TailwindCSS'}
                        github={''}
                        link={''}
                        imageSrc={'Privatyze.png'}
                    />
                </FadeSlide>
                <div className={'flex items-center text-lg absolute bottom-4 right-10 font-asap tracking-widest uppercase animate__animated animate__pulse animate__slow animate__infinite'}>
                    scroll
                    <Icon.ChevronRight/>
                </div>
            </div>
        </div>
    )
}
