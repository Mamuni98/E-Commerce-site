import { Outlet } from "react-router-dom";
import TheNavbar from "./TheNavbar";

const RootLayout = () => {
    return<>
    <TheNavbar/>
    <Outlet/>
    </>
}
export default RootLayout;