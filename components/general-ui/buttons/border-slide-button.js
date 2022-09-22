import FlipMove from 'react-flip-move';
import {useEffect, useState} from "react";

export default function BorderSlideButton(props){


    return(
        <button onClick={props.onClick} className={'cursor-pointer font-asap tracking-widest text-lg group overflow-hidden'}>
            {props.children}
            <div className={'border-b border-zinc-700 dark:border-white w-full -translate-x-1/2 transition ease-in-out duration-300 group-hover:translate-x-0'}>

            </div>
        </button>
    )
}