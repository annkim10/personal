import React from "react"
import "./about.css"
import pic from "../../images/about.jpg"
import jojo from "../../images/jojo.jpg"
import { BsArrowReturnRight } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { FaGraduationCap, FaLinkedin, FaGithub, FaPaw } from "react-icons/fa"

const About = () => {

    return (
        <div className="about-outer-div">
            <div className="about-inner-div">
                <div className="about-left-div">
                    <h1 className="about-header">About Me</h1>
                    <div className="about-personal-div">
                        <div className="about-descrip-div">
                            <div className="about-icon">
                                <MdLocationOn />
                            </div>
                            <div className="about-text">
                                <h1>Long Island City, NY</h1>
                            </div>
                        </div>
                        <div className="about-descrip-div">
                            <div className="about-icon">
                                <FaPaw />
                            </div>
                            <div className="about-text">
                                <h1>Dog lover</h1>
                            </div>
                        </div>
                    </div>
                    <div className="about-edu-div">
                        <h1 className="about-subheader">EDUCATION</h1>
                        <div className="about-descrip-edu">
                            <div className="about-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="about-text">
                                <h1 className="school">App Academy</h1>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <div className="about-descrip-edu">
                            <div className="about-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="about-text">
                                <h1 className="school">Northwestern University</h1>
                                <p>Bachelors Degree</p>
                                <p>Psychology, <br/> Integrated Marketing Communications</p>
                            </div>
                        </div>
                    </div> 
                    <div className="about-links-div">
                        <h1 className="about-subheader">CONNECT</h1>
                        <div className="about-descrip-div">
                            <div className="about-icon">
                                <FaLinkedin />
                            </div>
                            <div className="about-text">
                                <h1>LinkedIn</h1>
                            </div>
                        </div>
                        <div className="about-descrip-div">
                            <div className="about-icon">
                                <FaGithub />
                            </div>
                            <div className="about-text">
                                <h1>Github</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="about-right-div">
                    <img className="about-pic" src={pic} />
                    <h1 className="rollie">This is Rollie</h1>
                    <BsArrowReturnRight className="rollie-arrow"/>
                    <div className="jojo-pic-div">
                        <img className="jojo-pic" src={jojo} />
                    </div>
                    <h1 className="jojo">This is Jojo</h1>
                    <BsArrowReturnRight className="jojo-arrow"/>
                </div>
            </div>        
        </div>
    )
}

export default About