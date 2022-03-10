import React from "react"
import { useEffect } from "react";
import { Link } from "react-scroll";
import "./experience.css"
import Develop from "./develop/develop";
import Market from "./market/market";
import Advertise from "./advertise/advertise";


const Experience = () => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className="experience-wrapper">
            <Develop />
            <Market />
            <Advertise />
        </div>
    )
}

export default Experience