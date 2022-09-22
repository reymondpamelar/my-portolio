import * as Icon from 'react-feather'
import DarkModeToggle from "../dark-mode/toggle";
import {useState} from "react";
import FadeSlide from "../flip-move/fadeSlide";

export default function MobileNavbar(props) {
    const [showMenu, setShowMenu] = useState(false)

    function changePage(step) {
        props.setStep(step)
        setTimeout(() => {
            setShowMenu(false)
        },250)
    }
    return (
        <div className={'w-full fixed top-0 z-50'}>
            <div className={'relative'}>
                <div className={'z-50 flex items-center gap-12 rounded-b-2xl p-5 px-12'}>
                    <h4>RP</h4>
                    <div className={'grow flex justify-end'}>
                        <FadeSlide>
                            {
                                showMenu ?
                                    <Icon.X key={'X'} onClick={() => setShowMenu(!showMenu)}/>
                                    :
                                    <Icon.Sidebar key={'sidebar'} onClick={() => setShowMenu(!showMenu)}/>

                            }
                        </FadeSlide>
                    </div>
                </div>
                <FadeSlide>
                    {
                        showMenu ?
                            <div key={'menu'} className={'-z-10 h-screen w-screen fixed top-0 dark:bg-zinc-800 bg-mainWhite flex flex-col items-center justify-center space-y-10 transition ease-in-out duration-300'}>
                                <div onClick={()=>changePage(0)} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                    <h2 className={'flex items-center'}>
                                        Home
                                    </h2>
                                    <div className={props.step !== 0 ? 'translate-x-48 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                </div>
                                <div onClick={()=>changePage(1)} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                    <h2 className={'flex items-center'}>
                                        About
                                    </h2>
                                    <div className={props.step !== 1 ? 'translate-x-48 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                </div>
                                <div onClick={()=>changePage(2)} className={' cursor-pointer p-2 overflow-hidden relative'}>
                                    <h2 className={'flex items-center'}>
                                        Projects
                                    </h2>
                                    <div className={props.step !== 2 ? 'translate-x-48 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                                </div>
                                <div className={''}>
                                    <DarkModeToggle/>
                                </div>
                            </div>
                            :
                            null

                    }
                </FadeSlide>
            </div>
        </div>
    )
}
