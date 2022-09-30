import Head from 'next/head'
import ContactBar from "../../components/contactBar";

export default function DashboardLayout({children}) {
    return (
        <div id={"main"} className={'overflow-x-hidden overflow-y-scroll relative w-screen h-screen bg-mainWhite dark:bg-zinc-800 transition ease-in-out duration-300'}>

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
