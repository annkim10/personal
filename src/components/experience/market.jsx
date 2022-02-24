import React from 'react';
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
                </div>
                <div className='market-right-div'>
                    <div className='market-skills-list-div'>
                        <ul className='market-skills-list'>
                            <li><span><BsRecordFill className='bullet-point'/></span> Experience</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default Market