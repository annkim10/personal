import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";


const AgencySlide = ( { visible }) => {

    const [clicked, setClicked] = useState(false)

    const animate = useSpring({
        // height: umDetails ? 350 : 300,
        // config: {
        //     mass: 1,
        //     tension: 100,
        //     friction: 80,
        //     duration: 1000,
        //     easing: easings.easeOutQuad
        // }
    })

    const handleClick = (e) => {
       e.preventDefault()
       clicked ? setClicked(false) : setClicked(true)
    }
    
    return (
        <a.div style={animate} className={ clicked ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleClick}>
            <div className="agency-slide-inner-div">
                <div className="agency-slider-inner-left" ></div>
                <div className="agency-slide-inner-mid">
                    <h1 className="agency-name">AGENCY NAME</h1>
                </div>
                <div className={ clicked ? "agency-slider-inner-right-active" : "agency-slider-inner-right-inactive" }>
                    <div className="agency-details-outer-wrapper">
                        <div className="agency-details-inner-wrapper">
                            <h1 className="details-header">POSITIONS HELD</h1>
                                <ul>
                                    <li className="details-role">
                                        <h1 className="role-name">
                                            Position,
                                            <span> timing</span>
                                        </h1>
                                        <p className="role-brands">Brand</p>
                                    </li>
                                    <li className="details-role">
                                        <h1 className="role-name">
                                            Position,
                                            <span> timing</span>
                                        </h1>
                                        <p className="role-brands">Brand</p>
                                    </li>
                                    <li className="details-role">
                                        <h1 className="role-name">
                                            Position,
                                            <span> timing</span>
                                        </h1>
                                        <p className="role-brands">Brand</p>
                                    </li>
                                </ul>
                            </div>
                        <button  
                            className="agency-close-button"
                            onClick={handleClick}>
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </a.div>

    )

}

export default AgencySlide