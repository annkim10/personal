import { config, easings, useSpring, animated as a } from "react-spring";
import { MdKeyboardArrowRight } from "react-icons/md";

const Samsung = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 10 : 200, 
        config: {
            mass: 1,
            tension: 200,
            friction: 80,
            duration: 2000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className="market-bottom-wrapper" style={animate}>
            <h1 className='market-roles-header'>MY EXPERIENCE AT SAMSUNG</h1>
            <div className='market-roles-wrapper'>
                <div className='market-role-div'>
                    <h1 className='market-division'>B2C Desktop Monitors,</h1>
                    <p className='market-role'>Product Marketing Manager</p>
                </div>
                <a className='market-button' target="_blank" href="https://drive.google.com/file/d/1IwkLDUzsc7yL3jfRpFT_yTYMNKDksjgS/view?usp=sharing">
                    MORE DETAILS 
                    <span><MdKeyboardArrowRight /></span>
                </a>
            </div>
            <div className='market-roles-wrapper'>
                <div className='market-role-div'>
                    <h1 className='market-division'>B2B Hospitality TV,</h1>
                    <p className='market-role'>Product Marketing Manager</p>
                </div>
                <a className='market-button' target="_blank" href="https://drive.google.com/file/d/1IwkLDUzsc7yL3jfRpFT_yTYMNKDksjgS/view?usp=sharing">
                    MORE DETAILS 
                    <span><MdKeyboardArrowRight /></span>
                </a>
            </div>
        </a.div>
    )
}

export default Samsung