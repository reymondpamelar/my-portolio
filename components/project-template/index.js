import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'

export default function ProjectTemplate(props) {

    return (
        <div className={' rounded-3xl w-full border border-zinc-300 dark:border-zinc-600 h-[30rem] md:h-[35rem] w-[30rem] min-w-[20rem] md:min-w-[30rem]'}>
            <div className={'group relative shadow-xl bg-zinc-800 text-gray-400 dark:text-gray-400 dark:bg-white dark:bg-clip-padding dark:backdrop-filter backdrop-blur-sm dark:bg-opacity-10 rounded-3xl w-full h-full border border-zinc-300 dark:border-zinc-600 overflow-hidden -translate-x-10 -translate-y-10 transition ease-in-out duration-500'}>
                <div className={'relative z-50 p-10 space-y-4 rounded-t-3xl font-asap uppercase tracking-widest h-[50%] md:h-[45%]'}>
                    <h2 className={'text-4xl md:text-5xl'}>{props.title}</h2>
                    <div>
                        {props.techUsed}
                    </div>
                    <div className={'flex gap-6'}>
                        <Icon.GitHub onClick={() => window.open(props.github, '_blank', 'noopener,noreferrer')}/>
                        <Icon.Link onClick={() => window.open(props.link, '_blank', 'noopener,noreferrer')}/>
                    </div>
                </div>
                <div className={'opacity-0 group-hover:opacity-50 absolute inset-0 flex transition ease-in-out duration-300'}>
                    <img src={props.imageSrc} className={'object-none object-center h-full w-full bg-white rounded-b-3xl relative bg-white opacity-50'}/>
                </div>
            </div>
        </div>
    )
}
