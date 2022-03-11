import { config, easings, useSpring, animated as a } from "react-spring";
import { MdKeyboardArrowRight } from "react-icons/md";

const Samsung = ( {visible}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 10 : 200, 
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 2500,
            easing: easings.easeInOutQuad
        }
    })

    return (
        <a.div className="market-bottom-wrapper" style={animate}>
            <h1 className='market-roles-header'>Positions at Samsung</h1>
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
            </div>
        </a.div>
    )
}

export default Samsung