import FlipMove from 'react-flip-move';
import {useEffect, useRef, useState} from "react";
import useOnScreen from "../useOnScreen";

export default function AccordionVertical(props){

    const [children, setChildren] = useState(null)
    const [isSet, setIsSet] = useState(false)
    useEffect(() => {
        if(isVisible && !isSet || props.useOnScreen === false) {
            setTimeout(() => {
                setIsSet(true)
                setChildren(props.children)
            },1)
        }
    })

    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return(
        <div ref={props.useOnScreen !== false ? ref : null}>
            <FlipMove className={props.className} enterAnimation={'accordionVertical'} delay={props.delay? props.delay : 500} staggerDelayBy={200} staggerDurationBy={50}>
                {children}
            </FlipMove>
        </div>
    )
}