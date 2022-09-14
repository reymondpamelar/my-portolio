import React from "react";
import DashboardLayout from "../layouts/dashboard";
import Intro from "../containers/dashboard/intro";
import About from "../containers/dashboard/about";
import Projects from "../containers/dashboard/projects";

export default function Home() {

    return (
        <DashboardLayout>
            <Intro/>
            <About/>
            <Projects/>
        </DashboardLayout>
    )
}
