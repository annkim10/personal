import { useState, useRef, useEffect } from 'react';
import useIntersection from '../../_utils/useIntersection';
import "./css/market.css";
import MarketHeaders from './animations/marketheaders';
import VideoWrapper from './animations/videowrapper';
import MarketDescrip from './animations/marketdescrip';


const Market = ( { mobile }) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='market-outer-div'>
            <div className='market-inner-div' ref={ref}>
               <div className='market-left-div'>
                   <div className='market-left-top-div'>
                        <MarketHeaders visible={visible}/> 
                   </div>
                   <div className='market-left-bottom-div'>
                        <MarketDescrip visible={visible} /> 
                   </div>
                </div>
                <div className='market-right-div'>
                    <h1 className='youtube-header'>
                        Featured in Samsung's 
                        <span>
                            <a target="_blank" href="https://news.samsung.com/global/video-replay-unbox-and-discover-2021">
                                Unbox and Discover 2021
                            </a>
                        </span>
                    </h1>
                    <VideoWrapper mobile={mobile} visible={visible}/>
                </div>
            </div> 
        </div>
    )
}


export default Market