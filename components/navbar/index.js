import DesktopNavbar from "./desktop-mode";
import MobileNavbar from "./mobile-mode";
import {useState} from "react";
export default function Navbar(props) {

    let [currUnderline, setCurrUnderline] = useState('Home')
    return (
        <div className={''}>
            <div className={'hidden md:block'}>
                <DesktopNavbar currUnderline={currUnderline} setCurrUnderline={setCurrUnderline}/>
            </div>
            <div className={' md:hidden'}>
                <MobileNavbar currUnderline={currUnderline} setCurrUnderline={setCurrUnderline}/>
            </div>
        </div>
    )
}
