import React from "react"
import { useEffect } from "react";
import { Link } from "react-scroll";
import "./experience.css"
import Develop from "./develop/develop";
import Market from "./market/market";
import Advertise from "./advertise/advertise";
import Timeline from "./timeline/animations/timeline";
import Projects from "./develop/projects";

const Experience = ( ) => {

    return (
        <div className="experience-wrapper">
            <Timeline />
            <Develop />
            <Projects />
            <Market />
            <Advertise />
        </div>
    )
}

export default Experience