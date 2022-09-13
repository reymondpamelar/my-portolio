import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Sidebar from "../../components/pro-sidebar";

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
                <div id={"scroll"} className={`w-full md:ml-16`}>
                    <body className="w-full">
                    {children}
                    </body>
                </div>
                <div className={'md:ml-16 fixed bottom-0 left-0 flex items-center justify-center p-4 border-t border-zinc-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 inset-x-0'}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact me!{' '}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
