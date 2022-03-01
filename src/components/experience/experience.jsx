import React from "react"
import { useEffect } from "react";
import { Link } from "react-scroll";
import Develop from "./develop";
import Market from "./market";
import Advertise from "./advertise";
import Splash from "../splash/splash";

const Experience = () => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className="experience-wrapper">
            <Develop />
            {/* <Market />
            <Advertise /> */}
        </div>
    )
}

export default Experience