import React from "react"
import TimelineBar from "../../images/timeline_bar.svg"
// import Circle from "../../images/circle.svg"
import Circle from "./circle"


const Timeline = () => {

    return (
        <div className="timeline-wrapper">
            <h1 className="timeline-header">MY GROWTH</h1>
            <img className="timeline-bar" src={TimelineBar} />
       
            {/* <img className="timeline-circle" src={Circle} /> */}
            <div className="timeline-milestone-wrapper">
                <div className="milestone-div">
                    <div className="time-div">
                        <h1>PRESENT</h1>
                    </div>
                    <div className="stage-div">
                        <p>How to <span>develop</span> the product</p>
                    </div> 
                </div>
                 <div className="milestone-div">
                    <div className="time-div">
                        <h1>2016 - 2021</h1>
                    </div>
                    <div className="stage-div">
                        <p>How to <span>market</span> the product</p>
                    </div> 
                </div>
                 <div className="milestone-div">
                    <div className="time-div">
                        <h1>2010 - 2016</h1>
                    </div>
                    <div className="stage-div">
                        <p>How to <span>advertise</span> the product</p>
                    </div> 
                </div>
                <Circle />
            </div>
        </div>
    )
}

export default Timeline