import React from "react"
import "./about.css"
import pic from "../../images/about.jpg"
import jojo from "../../images/jojo.jpg"
import { BsArrowDown } from "react-icons/bs"

const About = () => {

    return (
        <div className="about-outer-div">
            <div className="about-inner-div">
                <div className="about-descrip-wrapper">
                    <h1 className="about-header">About Me</h1>
                    <div className="about-descrip-div">
                       <h1 className="about-descrip">My Interests</h1>
                       <p className="about-descrip-answer">Dogs, technology, movies and tv series</p>
                        <h1 className="about-descrip">Location</h1>
                       <p className="about-descrip-answer">Long Island City, NY</p>
                        <h1 className="about-descrip">Education</h1>
                       <p className="about-descrip-answer">Northwestern University, Bachelors Degree</p>
                        <p className="about-descrip-answer">Psychology, Integrated Marketing Communications</p>
                    </div>
                </div>
                <div className="about-img-wrapper">
                    <img className="about-pic" src={pic} />
                    <img className="jojo-pic" src={jojo} />
                    <h1 className="me-caption">This is me</h1>
                    <BsArrowDown className="me-arrow"/>
                    <h1 className="rollie-caption">This is Rollie</h1>
                    <BsArrowDown className="rollie-arrow"/>
                    <h1 className="jojo-caption">This is Jojo</h1>
                    <BsArrowDown className="jojo-arrow"/>
                </div>
            </div>        
        </div>
    )
}

export default About