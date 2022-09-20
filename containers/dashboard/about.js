import React from "react";
import 'animate.css';
import * as Icon from 'react-feather'
import { motion } from "framer-motion"
import FadeSlide from "../../components/flip-move/fadeSlide";

export default function About() {


    return (
        <div className={'pt-20'}>
            <div className={'px-4'}>
                <h1 className={' text-8xl pl-4'}>
                    About
                </h1>
                <div className={'text-lg mt-10 md:pl-10'}>
                    <FadeSlide>
                        <div key={'quote1'} className={' grid md:grid-cols-2 mb-20'}>
                            <div className={'space-y-6 bg-zinc-700 rounded-xl p-4'}>
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
                        <div key={'quote2'} className={'grid my-20 mr-20 rounded-xl'}>
                            <div className={'bg-zinc-700 rounded-xl p-4'}>
                                <div className={'border-b  bordeflex grid grid-cols-2 justify-center rounded-t-xl p-3'}>
                                    <h4>
                                        Languages
                                    </h4>
                                    <div className={'flex justify-end'}>
                                        <Icon.Code size={50}/>
                                    </div>
                                </div>
                                <ul className={'flex flex-wrap divide-x text-center justify-center rounded-b-xl p-3'}>
                                    <li className={'px-4 grow'}>Javascript</li>
                                    <li className={'px-4 grow'}>HTML</li>
                                    <li className={'px-4 grow'}>CSS</li>
                                    <li className={'px-4 grow'}>Java</li>
                                    <li className={'px-4 grow'}>C</li>
                                    <li className={'px-4 grow'}>C++</li>
                                    <li className={'px-4 grow'}>C#</li>
                                    <li className={'px-4 grow'}>Python</li>
                                </ul>
                            </div>
                            <div>
                                <div className={'flex grid justify-center rounded-t-xl p-3'}>
                                    <div className={'flex justify-center'}>
                                        <Icon.Code size={50}/>
                                    </div>
                                    Frameworks
                                </div>
                                <ul className={'flex gap-2 text-center justify-center rounded-b-xl p-3'}>
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
                                <ul className={'flex gap-2 text-center justify-center rounded-b-xl p-3'}>
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
                    </FadeSlide>
                </div>
            </div>

        </div>
    )
}
