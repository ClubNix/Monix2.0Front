import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () =>{
    return(
        <div className={"navigation"}>
            <NavLink exact to={"/"} activeClassName="nav-active">
                Home
            </NavLink>
            <NavLink exact to={"/Feeder"} activeClassName="nav-active">
                Feeder
            </NavLink>
        </div>
    );
};

export default Navigation;
