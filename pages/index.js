import React, {useState, useEffect} from "react";
import DashboardLayout from "../layouts/dashboard";
import Home from "../containers/dashboard/home";
import About from "../containers/dashboard/about";
import Projects from "../containers/dashboard/projects";
import FadeSlide from "../components/flip-move/fadeSlide";
import Navbar from "../components/navbar";
import Head from "next/head";
import Loader from "../components/loader";
import Contact from "../containers/dashboard/contact";
import Favicon from "../components/favicon";

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

    const pages = [
        {index:0, title:'Home', content:<Home/>},
        {index:1, title:'About', content:<About/>},
        {index:2, title:'Projects', content:<Projects/>},
        {index:3, title:'Contact', content:<Contact/>},
    ]

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <DashboardLayout>

            <div id={'loader'} className={'transition ease-in-out duration-300 opacity-100 h-screen w-screen flex justify-center items-center bg-mainWhite dark:bg-zinc-800 z-50 fixed '}>
                <div className={'relative '}>
                    <Loader/>
                </div>
            </div>

            <div id={'navbar'} className={'z-50 hidden'}>
                <Navbar/>
            </div>
            <FadeSlide className={'snap-both snap-proximity'}>
                {pages.map((page) => {
                    return (
                        <div id={page.title} key={page.title} className={'snap-start'}>
                            {page.content}
                        </div>
                    )
                })}
            </FadeSlide>
        </DashboardLayout>
    )
}
