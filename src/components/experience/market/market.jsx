import React from 'react';
import Youtube from './youtube';
import "./market.css";
import line from "../../../images/line.svg"
import { MdKeyboardArrowRight } from "react-icons/md"


const Market = () => {

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div'>
                <div className='market-left-div'>
                    <h1 className='market-time'>OCT 2016 - SEP 2021</h1>
                    <img className='market-line' src={line} />
                    <div className='market-text-wrapper'>
                        <h1 className='market-header'>Learning to <span>market</span> the product</h1>
                        <p className='market-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='market-right-div'>
                    <div className='market-details-wrapper'>
                        <Youtube />
                        <h1 className='youtube-header'>Featured in Samsung's Unbox & Discover event</h1>
                    </div>
                </div>
            </div>  
            <div className='market-bottom-div'>
                <div className='market-roles-wrapper'>
                    <div className='market-role-div'>
                        <h1 className='market-role'>B2C Desktop Monitors,</h1>
                        <p>Product Marketing Manager</p>
                    </div>
                    <button className='market-button'>MORE DETAILS <span><MdKeyboardArrowRight /></span></button>
                </div>
                <div className='market-roles-wrapper'>
                    <div className='market-role-div'>
                        <h1 className='market-role'>B2B Hospitality TV,</h1>
                        <p>Product Marketing Manager</p>
                    </div>
                    <button className='market-button'>MORE DETAILS <span><MdKeyboardArrowRight /></span></button>
                </div>
            </div>
        </div>
    )
}


export default Market