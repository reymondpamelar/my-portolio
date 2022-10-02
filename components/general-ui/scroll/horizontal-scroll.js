import {useEffect, useRef} from "react";

export function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if(el.scrollLeft + e.deltaY <= el.scrollWidth - el.clientWidth && el.scrollLeft + e.deltaY >= 0){
                    if (e.deltaY === 0) return;
                    e.preventDefault();
                    el.scrollTo({
                        left: el.scrollLeft + e.deltaY * 5,
                        behavior: "smooth"
                    });
                }
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    });
    return elRef;
}