import { useState, useRef, useEffect} from "react"
import useIntersection from "../../_utils/useIntersection"
import "./css/advertise.css"
import AdvertiseHeaders from "./animations/advertise-headers"
import Agencies from "./animations/agency-wrapper"
import ScrollDown from "../../_utils/scrolldown";

const Advertise = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='advertise-outer-div' id="advertise-container">
            <div className='advertise-inner-div' ref={ref}>
                <div className='advertise-top-div'>
                    <AdvertiseHeaders visible={visible}/>
                    {/* <h1 className="advertise-cta">CLICK FOR MORE DETAILS</h1> */}
                </div>
                <div className="advertise-bottom-div">
                    <Agencies visible={visible} />
                </div>
            </div>      
         
        </div>
    )
}


export default Advertise
