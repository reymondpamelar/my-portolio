import FlipMove from 'react-flip-move';
import {useEffect, useState} from "react";

export default function MiddleSlideButton(props){


    return(
        <button onClick={props.onClick} className={'cursor-pointer relative font-asap tracking-widest text-lg group overflow-hidden'}>
            {props.children}
            <div className={'pt-2'}>
                <span className="absolute -bottom-1 left-1/2 w-3 h-[0.3rem] bg-white group-hover:w-1/2 group-hover:transition-all ease-in-out duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-3 h-[0.3rem] bg-white group-hover:w-1/2 group-hover:transition-all ease-in-out duration-300"></span>
            </div>
        </button>
    )
}