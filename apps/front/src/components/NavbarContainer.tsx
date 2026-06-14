import { PropsWithChildren } from "react";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

type props = PropsWithChildren

const NavbarContainer = (props: props) => {
    return (
        <div className="relative">
            <DesktopNavbar>{props.children}</DesktopNavbar>
            <MobileNavbar>{props.children}</MobileNavbar>
        </div>
    )
}

export default NavbarContainer