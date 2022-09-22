import * as Icon from 'react-feather'
import DarkModeToggle from "../dark-mode/toggle";
export default function DesktopNavbar(props) {
    return (
        <div className={'flex justify-start w-full fixed top-0 z-50'}>
            <div className={'z-50 flex items-center gap-12 rounded-b-2xl p-5 px-12'}>
                <h4>RP</h4>
                <div onClick={()=>props.setStep(0)} className={'cursor-pointer p-2 overflow-hidden relative'}>
                    <div>
                        Home &gt;
                    </div>
                    <div className={props.step !== 0 ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                </div>
                <div onClick={()=>props.setStep(1)} className={'cursor-pointer p-2 overflow-hidden relative'}>
                    <div>
                        About &gt;
                    </div>
                    <div className={props.step !== 1 ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                </div>
                <div onClick={()=>props.setStep(2)} className={'cursor-pointer p-2 overflow-hidden relative'}>
                    <div>
                        Projects &gt;
                    </div>
                    <div className={props.step !== 2 ? 'translate-x-40 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500' : 'translate-x-0 absolute inset-0 bottom-0 border-b border-zinc-500 dark:border-white transition ease-in-out duration-500'}></div>
                </div>
                <div>
                    <DarkModeToggle/>
                </div>
            </div>
        </div>
    )
}
