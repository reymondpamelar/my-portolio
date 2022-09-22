import React, {useState} from "react";
import DashboardLayout from "../layouts/dashboard";
import Intro from "../containers/dashboard/intro";
import About from "../containers/dashboard/about";
import Projects from "../containers/dashboard/projects";
import FadeSlide from "../components/flip-move/fadeSlide";
import Navbar from "../components/navbar";
import {motion} from "framer-motion";
import Particles from "react-tsparticles";
import {loadTrianglesPreset} from "tsparticles-preset-triangles";
import Head from "next/head";

export default function Home() {

    const [step, setStep] = useState(0)
    const pages = [
        {index:0, title:'Intro', content:<Intro/>},
        {index:1, title:'About', content:<About/>},
        {index:2, title:'Projects', content:<Projects/>},
    ]

    const particlesInit = (main) => {
        return loadTrianglesPreset(main)
    };

    const particlesLoaded = (container) => {

    };

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

            <div className={'z-50'}>
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
