import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import { motion } from "framer-motion"

export default function About() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <div className={'mt-10'}>
            <div className={'px-4'}>
                <h1 className={'border-l pl-4'}>
                    About
                </h1>
                <div className={'text-lg mt-10 pl-10'}>
                    <div className={' grid grid-cols-2 mb-20'}>
                        <div className={'space-y-6 bg-white text-zinc-700 rounded-xl p-4'}>
                            <div>
                                Interweaving my creativity with problem solving is what I do best!
                            </div>
                            <div>
                                I love to create <span className={'text-pblue font-bold'}>fluid</span> and <span className={'text-pblue font-bold'}>dynamic</span> web applications while keeping <span className={'text-pblue font-bold'}>responsiveness</span> and <span className={'text-pblue font-bold'}>accessibility</span> in mind.
                            </div>
                            <div>
                                However, I do like to explore outside the boundaries of a browser.
                            </div>
                        </div>
                    </div>
                    <label className={' bg-white text-zinc-700 rounded-xl p-4'}>
                        Here are the things I use to create what I want:
                    </label>
                    <div className={'grid grid-cols-3 gap-10 my-6 mr-40 p-4 rounded-xl bg-white text-zinc-700 divide-x'}>
                        <div>
                            <div className={'flex grid justify-center rounded-t-xl p-3'}>
                                <div className={'flex justify-center'}>
                                    <Icon.Code size={50}/>
                                </div>
                                Programming Languages
                            </div>
                            <ul className={'flex grid gap-2 text-center justify-center rounded-b-xl p-3'}>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>C#</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div>
                            <div className={'flex grid justify-center rounded-t-xl p-3'}>
                                <div className={'flex justify-center'}>
                                    <Icon.Code size={50}/>
                                </div>
                                Frameworks
                            </div>
                            <ul className={'flex grid gap-2 text-center justify-center rounded-b-xl p-3'}>
                                <li>Next.js</li>
                                <li>React.js</li>
                                <li>React Native</li>
                                <li>TailwindCSS</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div>
                            <div className={'flex grid justify-center  rounded-t-xl p-3 '}>
                                <div className={'flex justify-center'}>
                                    <Icon.Code size={50}/>
                                </div>
                                Developer Tools
                            </div>
                            <ul className={'flex grid gap-2 text-center justify-center rounded-b-xl p-3'}>
                                <li>Node.js</li>
                                <li>Ceramic</li>
                                <li>Metamask</li>
                                <li>React Redux</li>
                                <li>Storybook</li>
                                <li>Miro</li>
                                <li>Figma</li>
                                <li>MongoDB</li>
                                <li>Postman</li>
                                <li>Git</li>
                                <li>Unity Engine</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
