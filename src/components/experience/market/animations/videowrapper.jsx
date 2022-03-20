import { useState, useRef, useEffect } from 'react';
import { config, easings, useSpring, animated as a } from "react-spring"
import Youtube from './youtube';

const VideoWrapper = ({visible, mobile}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0px, 0px, 0px)' : 'translate3d(1000px, 0px , -224px)',
        config: {
            mass: 1,
            tension: 280,
            friction: 180,
            duration: 1500,
            easing: easings.easeOutQuad
        }
    })

    return (
        <a.div className='market-details-wrapper' style={animate}>
            <Youtube mobile={mobile} />
            <div className='youtube-header'>
                <h1>Featured in Samsung's</h1>
                <a href="https://news.samsung.com/global/video-replay-unbox-and-discover-2021" target="_blank">
                    Unbox & Discover
                </a>
            </div>
        </a.div>
    )

}

export default VideoWrapper