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
        <div className={'mt-10'}>
            <div className={'pl-4'}>
                <h1 className={'border-l pl-4'}>
                    Projects
                </h1>
                <div className={'mt-10 pl-4 space-y-4 text-xl'}>
                    <div className={'bg-zinc-700 rounded-xl p-4 inline-block'}>
                        Attached are a few of my projects!
                    </div>
                </div>
            </div>

        </div>
    )
}
