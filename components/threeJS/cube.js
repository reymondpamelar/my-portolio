import { createRoot } from 'react-dom/client'
import React, { useRef, useEffect, useState } from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import {useCubeTexture} from '@react-three/drei'
import MiddleSlideButton from "../general-ui/buttons/middle-slide-button";
import * as Icon from "react-feather";

function Box(props) {
    const { viewport } = useThree()
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame(() => {
        ref.current.rotation.x += 0.001
        ref.current.rotation.y += 0.001;
    })
    useFrame(({ mouse }) => {
        const x = mouse.x
        const y = mouse.y
        ref.current.rotation.y += x / 400;
        ref.current.rotation.x += y / 400;
    })

    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        {path: 'torus/'}
    )
    const root = window.document.documentElement
    var observer = new MutationObserver(function (event) {
        if(event[0].target.classList[0] === 'dark'){
            setDark(true)
        } else {
            setDark(false)
        }
    })

    observer.observe(root, {
        attributes: true,
        attributeFilter: ['class'],
        childList: false,
        characterData: false
    })

    const [dark, setDark] = useState(false)
    return (
        <mesh
            {...props}
            ref={ref}
            scale={window.innerWidth > 1024 ? 3 : 2.5}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <icosahedronGeometry />
            <meshBasicMaterial color={ 'white'} envMap={texture} reflectivity={dark ? 1 : 0.95}/>
        </mesh>
    )
}

export default function Cube(){
    useEffect(() => {
        createRoot(document.getElementById('cube')).render(
            <Canvas >
                <ambientLight />
                <pointLight position={[0, 10, 10]} />
                <Box />
            </Canvas>,
        )
    }, []);

    return(
        <div id={'cube'} className={'h-[40rem] w-[40rem]'}>

        </div>
    )
}