import { useState, useRef, useEffect } from 'react';
import Youtube from './animations/youtube';
import useIntersection from '../../_utils/useIntersection';
import "./css/market.css";
import line from "../../../images/svg/line.svg"
import { MdKeyboardArrowRight } from "react-icons/md"
import MarketHeaders from './animations/marketheaders';
import VideoWrapper from './animations/videowrapper';
import Samsung from './animations/samsung';


const Market = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '1.0');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div'>
                <div className='market-left-div'>
                    <h1 className='market-time' ref={ref}>OCT 2016 - SEP 2021</h1>
                    <img className='market-line' src={line} />
                    <MarketHeaders visible={visible}/>
                </div>
                <div className='market-right-div'>
                    <VideoWrapper visible={visible}/>
                </div>
            </div>  
            <div className='market-bottom-div'>
                <Samsung visible={visible} />
                {/* <h1 className='market-roles-header'>Positions at Samsung</h1>
                <div className='market-roles-wrapper'>
                    <div className='market-role-div'>
                        <h1 className='market-division'>B2C Desktop Monitors,</h1>
                        <p className='market-role'>Product Marketing Manager</p>
                    </div>
                    <button className='market-button'>MORE DETAILS <span><MdKeyboardArrowRight /></span></button>
                </div>
                <div className='market-roles-wrapper'>
                    <div className='market-role-div'>
                        <h1 className='market-division'>B2B Hospitality TV,</h1>
                        <p className='market-role'>Product Marketing Manager</p>
                    </div>
                    <button className='market-button'>MORE DETAILS <span><MdKeyboardArrowRight /></span></button>
                </div> */}
            </div>
        </div>
    )
}


export default Market