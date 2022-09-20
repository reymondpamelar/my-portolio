import Head from 'next/head'
import ContactBar from "../../components/contactBar";

export default function DashboardLayout({children}) {
    return (
        <div className={'overflow-x-hidden overflow-y-scroll relative w-screen h-screen bg-mainWhite dark:bg-zinc-800 transition ease-in-out duration-300'}>
            <Head>
                <title>Reymond's Portfolio</title>
                <meta name="description" content="A brief look at my work :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex relative h-full">
                <div id={"scroll"} className={`w-full`}>
                    <body className="w-full text-zinc-500 dark:text-gray-400 transition ease-in-out duration-300">
                    {children}
                    </body>
                </div>
                <ContactBar/>
            </div>
        </div>
    )
}
