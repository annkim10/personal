import { useState, useRef, useEffect } from 'react';
import useIntersection from '../../_utils/useIntersection';
import "./css/market.css";
import MarketHeaders from './animations/marketheaders';
import VideoWrapper from './animations/videowrapper';


const Market = ( { mobile }) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div' ref={ref}>
               <div className='market-top-div'>
                    <MarketHeaders visible={visible}/>      
                </div>
                <div className='market-bottom-div'>
                    <VideoWrapper mobile={mobile} visible={visible}/>
                </div>
            </div> 
        </div>
    )
}


export default Market