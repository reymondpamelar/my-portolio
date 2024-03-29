import {useEffect, useState} from "react";

export default function Loader(){
    return (
        <div className={'animate-loaderRotate relative'}>
            <div className={'inline-block'}>
                <div className={'p-4 border border-zinc-600 dark:border-white rounded-xl inline-block animate-loaderSlide'}>

                </div>
            </div>
            <div className={'inline-block  rotate-90'}>
                <div className={'p-4 border border-zinc-600 dark:border-white rounded-xl inline-block animate-loaderSlide absolute right-0'}>

                </div>
            </div>
            <div className={'inline-block rotate-180'}>
                <div className={'p-4 border border-zinc-600 dark:border-white rounded-xl inline-block animate-loaderSlide absolute top-0'}>

                </div>
            </div>
            <div className={'inline-block  -rotate-90'}>
                <div className={'p-4 border border-zinc-600 dark:border-white rounded-xl inline-block animate-loaderSlide absolute bottom-0'}>

                </div>
            </div>
            <h5 className={'absolute text-sm inset-0 flex items-center justify-center animate-loaderInitialAppear pb-1'}>
                RP
            </h5>
        </div>
    )
}