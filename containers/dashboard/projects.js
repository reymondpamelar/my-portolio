import React from "react";
import 'animate.css';
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { motion } from "framer-motion"

export default function Projects() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <div className={'pt-24'}>
            <div className={'pl-4'}>
                <h1 className={'text-6xl md:text-8xl pl-4'}>
                    Projects
                </h1>
            </div>

        </div>
    )
}
