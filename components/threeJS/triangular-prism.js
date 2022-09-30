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
            {...props}
            ref={ref}
            scale={window.innerWidth > 640 ? 1.5 : 0.5}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <icosahedronGeometry />
            <meshBasicMaterial color={ '#6B7280'} envMap={texture} reflectivity={0.9}/>
        </mesh>
    )
}

export default function TriangularPrism(){
    useEffect(() => {
        createRoot(document.getElementById('triangularPrism')).render(
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box />
            </Canvas>,
        )
    }, []);

    return(
        <div id={'triangularPrism'} className={'h-screen w-screen fixed'}>

        </div>
    )
}