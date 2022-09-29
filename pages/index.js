import React, {useState, useEffect} from "react";
import DashboardLayout from "../layouts/dashboard";
import Home from "../containers/dashboard/home";
import About from "../containers/dashboard/about";
import Projects from "../containers/dashboard/projects";
import FadeSlide from "../components/flip-move/fadeSlide";
import Navbar from "../components/navbar";
import {motion} from "framer-motion";
import Particles from "react-tsparticles";
import {loadTrianglesPreset} from "tsparticles-preset-triangles";
import Head from "next/head";
import Loader from "../components/loader";

export default function Start() {
    useEffect(() => {
        setTimeout(()=> {
            document.getElementById('loader').classList.remove('opacity-100')
            document.getElementById('loader').classList.add('opacity-0')
            document.getElementById('navbar').classList.remove('hidden')
            setTimeout(()=> {
                document.getElementById('loader').classList.add('hidden')
            },300)
        },3000)
    }, [])

    const [step, setStep] = useState(0)
    useEffect(() => {
        document.getElementById('main').scrollTo(0, 0)
    }, [step])
    const pages = [
        {index:0, title:'Home', content:<Home setStep={setStep}/>},
        {index:1, title:'About', content:<About/>},
        {index:2, title:'Projects', content:<Projects/>},
    ]

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <DashboardLayout>
            <Head>
                <title>Reymond&apos;s Portfolio</title>
                <meta name="description" content="A brief look at my work :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id={'loader'} className={'transition ease-in-out duration-300 opacity-100 h-screen w-screen flex justify-center items-center bg-mainWhite dark:bg-zinc-800 z-50 fixed '}>
                <div className={'relative '}>
                    <Loader/>
                </div>
            </div>

            <div id={'navbar'} className={'z-50 hidden'}>
                <Navbar step={step} setStep={setStep}/>
            </div>
            <FadeSlide>
                {pages.map((page) => {
                    if(step === page.index){
                        return (
                            <div key={page.title} >
                                {page.content}
                            </div>
                        )
                    }
                })}
            </FadeSlide>
        </DashboardLayout>
    )
}
