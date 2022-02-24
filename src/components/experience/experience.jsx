import React from "react"
import { useEffect } from "react";
import Develop from "./develop";
import Market from "./market";

const Experience = () => {

    useEffect(() => window.scroll(0,0))

    return (
        <div className="experience-wrapper">
            <Develop />
            <Market />
        </div>
    )
}

export default Experience