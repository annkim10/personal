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
               <div className='market-top-div' ref={ref}>
                    <MarketHeaders visible={visible}/>      
                </div>
                <div className='market-bottom-div'>
                    <VideoWrapper mobile={mobile} visible={visible}/>
                </div>
                {/* <div className='market-bottom-div'>
                    <Samsung visible={visible} />
                </div> */}
            </div> 
        </div>
    )
}


export default Market