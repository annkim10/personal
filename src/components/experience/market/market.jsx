import { useState, useRef, useEffect } from 'react';
import Youtube from './animations/youtube';
import useIntersection from '../../_utils/useIntersection';
import "./css/market.css";
import line from "../../../images/svg/line.svg"
import { MdKeyboardArrowRight } from "react-icons/md"
import MarketHeaders from './animations/marketheaders';
import VideoWrapper from './animations/videowrapper';
import Samsung from './animations/samsung';
import ScrollDown from "../../_utils/scrolldown";

const Market = ( { mobile }) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '1.0');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div'>
                <div className='market-left-div'>
                    <h1 className='market-time' ref={ref}>OCT 2016 - SEP 2021</h1>
                    {/* <img className='market-line' src={line} /> */}
                    <MarketHeaders visible={visible}/>
                </div>
                <div className='market-right-div'>
                    <VideoWrapper mobile={mobile} visible={visible}/>
                </div>
            </div>  
            <div className='market-bottom-div'>
                <Samsung visible={visible} />
            </div>
            <ScrollDown idName={'market-scroll'} visible={visible} />
        </div>
    )
}


export default Market