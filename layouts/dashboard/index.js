import Head from 'next/head'
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
                <div id={"scroll"} className={`w-full `}>
                    <body className="w-full">
                    {children}
                    </body>
                </div>
                <ContactBar/>
            </div>
        </div>
    )
}
