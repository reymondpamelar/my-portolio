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
        <div key={props.title} className={' rounded-3xl w-full border border-zinc-400 dark:border-zinc-600 h-[25rem] md:h-[35rem] min-w-[20rem] md:min-w-[30rem]'}>
            <div id={props.title} className={'group relative shadow-xl bg-white text-zinc-500 dark:text-gray-400 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm dark:bg-opacity-10 rounded-3xl w-full h-full border border-zinc-400 dark:border-zinc-600 transition ease-in-out duration-500'}>
                <div className={'relative z-50 p-10 space-y-4 rounded-t-3xl font-asap uppercase tracking-widest h-[50%] md:h-[45%]'}>
                    <div className={'text-7xl font-galano absolute -left-8 -top-8'}>
                        {props.number}
                    </div>
                    <h2 className={props.titleClassName}>{props.title}</h2>
                    <div>
                        {props.techUsed}
                    </div>
                    <div className={'flex gap-6'}>
                        <Icon.GitHub onClick={() => window.open(props.github, '_blank', 'noopener,noreferrer')}/>
                        <Icon.Link onClick={() => window.open(props.link, '_blank', 'noopener,noreferrer')}/>
                    </div>
                </div>
                <div className={'opacity-0 group-hover:opacity-50 absolute inset-0 flex transition ease-in-out duration-300'}>
                    <img src={props.imageSrc} className={'object-none object-center h-full w-full bg-white rounded-3xl relative bg-white opacity-50'}/>
                </div>
            </div>
        </div>
    )
}
