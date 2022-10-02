import * as Icon from 'react-feather'
import DarkModeToggle from "../dark-mode/toggle";
import {useState} from "react";
import FadeSlide from "../flip-move/fadeSlide";
import {useEffect} from "react";
import AccordionVertical from "../flip-move/AccordionVertical";

export default function MobileNavbar(props) {
    useEffect(()=>{
        function addNavBg(){
            let bodyTopPos = document.getElementById('body').getBoundingClientRect().top;
            if(bodyTopPos < 0){
                document.getElementById('mobileNav').classList.add('opacity-100')
                document.getElementById('mobileNav').classList.remove('opacity-0')
            }
            else{
                document.getElementById('mobileNav').classList.remove('bg-opacity-100')
                document.getElementById('mobileNav').classList.add('opacity-0')
            }
        }
        document.getElementById('main').addEventListener('scroll', addNavBg, false)
    },[])

    const [showMenu, setShowMenu] = useState(false)

    function scrollTo(element){
        document.getElementById(element).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    function handleScroll(element) {
        scrollTo(element)
        setTimeout(() => {
            setShowMenu(false)
        },250)
    }
    return (
        <div className={'w-full fixed top-0 z-50'}>
            <div id={'mobileNav'}  className={'bg-gradient-to-t from-transparent to-mainWhite dark:to-zinc-900 opacity-0 transition ease-in-out duration-200 h-full w-full absolute'}>
            </div>
            <div className={'relative'}>
                <div className={'z-50 flex items-center gap-12 rounded-b-2xl p-5 px-12'}>
                    <h4>RP</h4>
                    <div className={'grow flex justify-end'}>
                        <AccordionVertical delay={1} useOnScreen={false}>
                            {
                                showMenu ?
                                    <Icon.X key={'X'} onClick={() => setShowMenu(!showMenu)}/>
                                    :
                                    <Icon.Menu key={'sidebar'} onClick={() => setShowMenu(!showMenu)}/>

                            }
                        </AccordionVertical>
                    </div>
                </div>
                <div className={'fixed top-0 -z-10'}>
                    <FadeSlide delay={1} useOnScreen={false}>
                        {
                            showMenu ?
                                <div>
                                    <FadeSlide delay={1} useOnScreen={false} className={' h-screen w-screen dark:bg-zinc-800 bg-mainWhite flex flex-col items-center justify-center space-y-10 transition ease-in-out duration-300'}>
                                        <div onClick={()=>handleScroll('Home')} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                            <h2 className={'flex items-center font-asap tracking-widest'}>
                                                / HOME
                                            </h2>
                                            <div className={props.currUnderline !== 'Home' ? 'translate-x-48 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                        </div>
                                        <div onClick={()=>handleScroll('About')} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                            <h2 className={'flex items-center font-asap tracking-widest'}>
                                                / ABOUT
                                            </h2>
                                            <div className={props.currUnderline !== 'About' ? 'translate-x-48 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                        </div>
                                        <div onClick={()=>handleScroll('Projects')} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                            <h2 className={'flex items-center font-asap tracking-widest'}>
                                                / PROJECTS
                                            </h2>
                                            <div className={props.currUnderline !== 'Projects' ? 'translate-x-56 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                        </div>
                                        <div onClick={()=>handleScroll('Contact')} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                            <h2 className={'flex items-center font-asap tracking-widest'}>
                                                / CONTACT
                                            </h2>
                                            <div className={props.currUnderline !== 'Contact' ? 'translate-x-56 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                        </div>
                                        <div className={''}>
                                            <DarkModeToggle/>
                                        </div>
                                    </FadeSlide>
                                </div>
                                :
                                null

                        }
                    </FadeSlide>
                </div>
            </div>
        </div>
    )
}
