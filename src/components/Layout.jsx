import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PreFooter } from "./PreFooter";

export function Layout() {

    return (
        <div>
            <Navbar className=" bg-white" ></Navbar>
            <Outlet ></Outlet>
            <PreFooter></PreFooter>
            <Footer ></Footer>
        </div>
    )
}