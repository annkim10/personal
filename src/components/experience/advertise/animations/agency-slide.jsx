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
                    <div className="agency-details-wrapper">
                        <h1>AGENCY NAME</h1>
                        <ul>
                            <li>
                                <h1>Position</h1>
                                <p>Brand</p>
                                <p>Time</p>
                            </li>
                            <li>
                                <h1>Position</h1>
                                <p>Brand</p>
                                <p>Time</p>
                            </li>
                            <li>
                                <h1>Position</h1>
                                <p>Brand</p>
                                <p>Time</p>
                            </li>
                        </ul>
                        <button  
                            className={ clicked ? "agency-close-button-active" : "agency-close-button-inactive"} 
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