import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Sidebar from "../../components/pro-sidebar";
import ContactBar from "../../components/contactBar";

export default function DashboardLayout({children}) {
    return (
        <div className={'overflow-x-hidden overflow-y-scroll relative w-screen h-screen bg-zinc-800'}>
            <Head>
                <title>Reymond's Portfolio</title>
                <meta name="description" content="A brief look at my work :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex relative h-full">
                <div className="h-screen fixed z-20 hidden md:flex">
                    <Sidebar/>
                </div>
                <div id={"scroll"} className={`w-full md:ml-20 `}>
                    <body className="w-full pb-24">
                    {children}
                    </body>
                </div>
                <ContactBar/>
            </div>
        </div>
    )
}
