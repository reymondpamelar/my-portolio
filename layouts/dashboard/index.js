
import dynamic from 'next/dynamic'

export default function DashboardLayout({children}) {
    const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
        ssr: false
    });
    return (
        <div id={"main"} className={'overflow-x-hidden overflow-y-scroll relative w-screen h-screen bg-mainWhite dark:bg-zinc-800 transition ease-in-out duration-300'}>
            <div className={''}>
                <AnimatedCursor
                    color="255,255,255"
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={1.7}
                    outerAlpha={0}
                    outerStyle={{
                        border: '1px solid #fff',
                        mixBlendMode: 'exclusion'
                    }}
                    innerStyle={{
                        mixBlendMode: 'exclusion'
                    }}
                />
            </div>
            <div className="flex relative h-full">
                <div className={`w-full`}>
                    <div id={'body'} className="w-full text-zinc-500 dark:text-zinc-300 transition ease-in-out duration-300">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
