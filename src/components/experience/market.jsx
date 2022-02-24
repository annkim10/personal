import React from 'react';
import Youtube from './youtube';
import "./experience.css";
import { BsRecordFill } from "react-icons/bs";
import { SiSamsung } from "react-icons/si"


const Market = () => {

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div'>
                <div className='market-left-div'>
                    <div className='develop-stage-div'>
                        <h2 className='develop-stage'>Learning to market the product</h2>
                    </div>
                    <div className='market-stage-descrip-div'>
                        <SiSamsung className='samsung-logo' />
                        <h1 className='develop-stage-time'>OCT 2016 - SEPT 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='market-youtube-div'>
                        <h1>Featured in Samsung Unbox and Discover</h1>
                        <a href="https://youtu.be/edX8kZcE4p8?t=1197">
                            Introduced new <span>Odyssey Neo G9 gaming monitor</span>
                        </a>
                        <div className='youtube-div'>
                            <Youtube />
                        </div>
                       
                    </div>
                </div>
                <div className='market-right-div'>
                    <div className='market-skills-list-div'>
                        <ul className='market-skills-list'>
                            <li className='market-skill'>
                                <div>
                                    <BsRecordFill className='bullet-point'/>
                                </div>
                                <div className='market-skill-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </li>
                            <br/>
                            <li className='market-skill'>
                                <div>
                                    <BsRecordFill className='bullet-point'/>
                                </div>
                                <div className='market-skill-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </li>
                            <br/>
                            <li className='market-skill'>
                                <div>
                                    <BsRecordFill className='bullet-point'/>
                                </div>
                                <div className='market-skill-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </li>
                            <br/>
                            <li className='market-skill'>
                                <div>
                                    <BsRecordFill className='bullet-point'/>
                                </div>
                                <div className='market-skill-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default Market