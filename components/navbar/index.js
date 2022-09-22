import DesktopNavbar from "./desktop-mode";
import MobileNavbar from "./mobile-mode";
export default function Navbar(props) {
    return (
        <div className={''}>
            <div className={'hidden md:block'}>
                <DesktopNavbar step={props.step} setStep={props.setStep}/>
            </div>
            <div className={' md:hidden'}>
                <MobileNavbar step={props.step} setStep={props.setStep}/>
            </div>
        </div>
    )
}
