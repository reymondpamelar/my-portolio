import React from "react";
import 'animate.css';
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { motion } from "framer-motion"

export default function About() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <div>
            <div className={'pl-4'}>
                <h1 className={'border-l pl-4'}>
                    About
                </h1>
                <div className={'mt-10 pl-4 space-y-4 text-lg'}>
                    <div>
                        👋🏽 Hi, my name is Reymond Pamelar
                    </div>
                </div>
            </div>

        </div>
    )
}
