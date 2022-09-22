import * as Icon from 'react-feather'
import DarkModeToggle from "../dark-mode/toggle";
import {useEffect} from "react";
import FadeSlide from "../flip-move/fadeSlide";

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
    return (
        <div className={'flex justify-start w-full fixed top-0 z-50'}>
            <div id={'nav'}  className={'bg-gradient-to-t from-transparent to-mainWhite dark:to-zinc-900 transition ease-in-out duration-500 h-full w-full absolute'}>
            </div>
            <FadeSlide className={'z-50 flex items-center gap-12 w-full p-5 px-12 relative'}>
                <h4>RP</h4>
                <div onClick={()=>props.setStep(0)} className={'cursor-pointer p-2 overflow-hidden relative font-asap tracking-widest'}>
                    <div>
                        / HOME
                    </div>
                    <div className={props.step !== 0 ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                </div>
                <div onClick={()=>props.setStep(1)} className={'cursor-pointer p-2 overflow-hidden relative font-asap tracking-widest'}>
                    <div>
                        / ABOUT
                    </div>
                    <div className={props.step !== 1 ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                </div>
                <div onClick={()=>props.setStep(2)} className={'cursor-pointer p-2 overflow-hidden relative font-asap tracking-widest'}>
                    <div>
                        / PROJECTS
                    </div>
                    <div className={props.step !== 2 ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                </div>
                <div>
                    <DarkModeToggle/>
                </div>
            </FadeSlide>
        </div>
    )
}
