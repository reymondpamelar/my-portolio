import { createRoot } from 'react-dom/client'
import React, { useRef, useEffect, useState } from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import {useCubeTexture} from '@react-three/drei'

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
        ref.current.rotation.y += x / 200;
        ref.current.rotation.x += y / 200;
    })

    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        {path: 'torus/'}
    )
    return (
        <mesh
            position={[1.5,0,1.25]}
            {...props}
            ref={ref}
            scale={window.innerWidth > 640 ? 1.5 : 0.9}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry />
            <meshBasicMaterial color={ 'white'} envMap={texture} reflectivity={1}/>
        </mesh>
    )
}

export default function Cube(){
    useEffect(() => {
        createRoot(document.getElementById('cube')).render(
            <Canvas>
                <ambientLight />
                <pointLight position={[0, 10, 10]} />
                <Box />
            </Canvas>,
        )
    }, []);

    return(
        <div id={'cube'} className={'h-full w-full fixed'}>

        </div>
    )
}