import React from 'react';
import Youtube from './youtube';
import "./market.css";
import line from "../../images/line.svg"


const Market = () => {

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div'>
                <h1 className='market-time'>OCT 2016 - SEP 2021</h1>
                <img className='market-line' src={line} />
                <div className='market-top-div'>
                    <div className='market-text-wrapper'>
                        <h1 className='market-header'>Learning to <span>market</span> the product</h1>
                        <p className='market-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
 
            
    
            </div>  
        </div>
    )
}


export default Market