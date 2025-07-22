import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import StairTransition from "./animation/StairTransition.jsx";

// import Footer from "../main/Footer.jsx";

function Layout() {
    return (
       <div>
        <Header />
        <StairTransition/>
        <Outlet/>
        {/* <Footer /> */}
       </div>
    )
}

export default Layout
