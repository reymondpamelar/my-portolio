import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import {useEffect} from "react";

export default function ProjectTemplate(props) {
    useEffect(() => {
        setTimeout(()=>{
            if(document.getElementById(props.title) != null){
                document.getElementById(props.title).classList.add('-translate-x-10')
                document.getElementById(props.title).classList.add('-translate-y-10')
            }
        },750)
    },[])
    return (
        <div key={props.title} className={' rounded-3xl w-full border border-zinc-400 dark:border-zinc-600 h-[20rem] md:h-[35rem] w-[15rem] md:min-w-[30rem]'}>
            <div id={props.title} className={'group relative shadow-xl bg-white text-zinc-500 dark:text-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 dark:bg-opacity-10 rounded-3xl w-full h-full border border-zinc-400 dark:border-zinc-600 transition ease-in-out duration-500'}>
                <div className={'relative h-full z-50 p-6 md:p-10 space-y-4 rounded-t-3xl font-asap uppercase tracking-widest'}>
                    <div className={'text-7xl font-galano absolute -left-8 -top-8'}>
                        {props.number}
                    </div>
                    <h2 className={props.titleClassName}>{props.title}</h2>
                    <div className={''}>
                        {props.techUsed}
                    </div>
                    <div className={'flex gap-6 md:gap-10 absolute right-6 bottom-6 md:right-10 md:bottom-10'}>
                        {props.github ?
                            <Icon.GitHub onClick={() => window.open(props.github, '_blank', 'noopener,noreferrer')} className={'cursor-pointer'}/>
                            :
                            null
                        }
                        {props.link ?
                            <Icon.Link onClick={() => window.open(props.link, '_blank', 'noopener,noreferrer')} className={'cursor-pointer'}/>
                            :
                            null
                        }
                    </div>
                </div>
                <div className={'opacity-0 group-hover:opacity-50 absolute inset-0 flex transition ease-in-out duration-300'}>
                    <img src={props.imageSrc} className={'object-cover object-center h-full w-full bg-white rounded-3xl relative bg-white opacity-50'}/>
                </div>
            </div>
        </div>
    )
}
