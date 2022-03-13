import React from "react"
import { useEffect } from "react";
import { Link } from "react-scroll";
import "./experience.css"
import Develop from "./develop/develop";
import Market from "./market/market";
import Advertise from "./advertise/advertise";


const Experience = ( {mobile} ) => {

    return (
        <div className="experience-wrapper">
            <Develop />
            <Market mobile={ mobile } />
            <Advertise />
        </div>
    )
}

export default Experience