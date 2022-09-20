import FlipMove from 'react-flip-move';

export default function FadeSlide(props){
    const customEnterAnimation = {
        from: { transform: 'translateX(6%)', transformOrigin: 'left center', opacity:'0' },
        to: { transform: 'translateX(0%)', transformOrigin: 'left center', opacity:'1'},
    };
    const customLeaveAnimation = {
        from: { transform: 'translateX(0%)', opacity:'1' },
        to: { transform: 'translateX(-6%)', opacity:'0'},
    };

    return(
        <div>
            <FlipMove enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} staggerDelayBy={200} staggerDurationBy={50}>
                {props.children}
            </FlipMove>
        </div>
    )
}