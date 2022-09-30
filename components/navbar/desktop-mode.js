import * as Icon from 'react-feather'
import DarkModeToggle from "../dark-mode/toggle";
import {useEffect, useState} from "react";
import React from "react";
import AccordionVertical from "../flip-move/AccordionVertical";

export default function DesktopNavbar(props) {

    useEffect(()=>{
        function addNavBg(){
            let bodyTopPos = document.getElementById('body').getBoundingClientRect().top;
            if(bodyTopPos < 0){
                document.getElementById('nav').classList.add('opacity-100')
                document.getElementById('nav').classList.remove('opacity-0')
            }
            else{
                document.getElementById('nav').classList.remove('bg-opacity-100')
                document.getElementById('nav').classList.add('opacity-0')
            }
        }
        document.getElementById('main').addEventListener('scroll', addNavBg, false)
    },[])

    function scrollTo(element){
        document.getElementById(element).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    useEffect(()=>{
        function underlineElement(){
            var currPos = 0
            let homePos = document.getElementById('Home').getBoundingClientRect().top;
            let aboutPos = document.getElementById('About').getBoundingClientRect().top;
            let projectsPos = document.getElementById('Projects').getBoundingClientRect().top;
            let positions = [homePos, aboutPos, projectsPos]
            let closest = positions.reduce(function(prev, curr) {
                return (Math.abs(curr - currPos) < Math.abs(prev - currPos) ? curr : prev);
            });
            switch(positions.indexOf(closest)){
                case 0:
                    props.setCurrUnderline('Home')
                    break;
                case 1:
                    props.setCurrUnderline('About')
                    break;
                case 2:
                    props.setCurrUnderline('Projects')
                    break;
            }
        }
        document.getElementById('main').addEventListener('scroll', underlineElement, false)

    },[])
    return (
        <div className={'flex justify-center w-full fixed top-0 z-50'}>
            <div id={'nav'}  className={'bg-gradient-to-t from-transparent to-mainWhite dark:to-zinc-900 transition ease-in-out duration-500 h-full w-full absolute'}>
            </div>
            <div className={'grid grid-cols-9 relative w-full'}>
                <h4 className={'p-5 pl-12 col-span-2'}>RP</h4>
                <div className={'col-span-5'}>
                    <AccordionVertical delay={3000} useOnScreen={false} className={'z-50 flex justify-center items-center gap-12 w-full p-5 px-12 relative'}>
                        <div onClick={()=> scrollTo('Home')} className={'cursor-pointer p-2 overflow-hidden relative font-asap tracking-widest'}>
                            <div>
                                / HOME
                            </div>
                            <div className={props.currUnderline !== 'Home' ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                        </div>
                        <div onClick={()=> scrollTo('About')} className={'cursor-pointer p-2 overflow-hidden relative font-asap tracking-widest'}>
                            <div>
                                / ABOUT
                            </div>
                            <div className={props.currUnderline !== 'About' ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                        </div>
                        <div onClick={()=> scrollTo('Projects')} className={'cursor-pointer p-2 overflow-hidden relative font-asap tracking-widest'}>
                            <div>
                                / PROJECTS
                            </div>
                            <div className={props.currUnderline !== 'Projects' ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                        </div>
                    </AccordionVertical>
                </div>
                <div className={'flex justify-end items-center p-5 pr-12 gap-8 col-span-2'}>
                    <div className={'cursor-pointer flex items-center gap-2'}>
                        <Icon.GitHub onClick={() => window.open('https://github.com/reymondpamelar', '_blank', 'noopener,noreferrer')} className={'w-5'}/>
                    </div>
                    <div className={'cursor-pointer flex items-center gap-2'}>
                        <Icon.Linkedin onClick={() => window.open('https://linkedin.com/in/reymondpamelar', '_blank', 'noopener,noreferrer')} className={'w-5'}/>
                    </div>
                    <div>
                        <DarkModeToggle/>
                    </div>
                </div>
            </div>
        </div>
    )
}
