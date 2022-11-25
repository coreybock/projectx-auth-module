import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "@Layout/Header/Header";

import * as s from "./Layout.style"


const Layout = (props) => {


    return (
        <s.LayoutStyle>
            <Header />
            <Outlet />
        </s.LayoutStyle>
    );
};

export default Layout;
