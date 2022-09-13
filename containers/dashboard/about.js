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

    const abouts = [
        {title: 'Web Development', description: 'I am a good developer', imgURL:''},
        {title: 'Web Development', description: 'I am a good developer', imgURL:''},
        {title: 'Web Development', description: 'I am a good developer', imgURL:''},
    ]

    function getAllElementStyles(property, value){
        const list = []
        function getStyles(node){
            for(var i=0; i<node.children.length; i++){
                if(getComputedStyle(node.children[i]).getPropertyValue(property) === value){
                    list.push(node.children[i])
                }
                if(node.children[i].children.length > 0)
                getStyles(node.children[i])
            }
        }
        getStyles(document.body)
        console.log(list)
    }
    getAllElementStyles('display', 'flex')

    return (
        <div>
            <div className={'md:flex items-center relative justify-center md:justify-start md:h-[50rem]'}>
                <motion.div     initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ da: 0.5 }}
                                className={''}>
                </motion.div>
            </div>

        </div>
    )
}
