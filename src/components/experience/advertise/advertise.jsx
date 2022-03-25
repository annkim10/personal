import { useState, useRef, useEffect} from "react"
import useIntersection from "../../_utils/useIntersection"
import "./css/advertise.css"
import AdvertiseHeaders from "./animations/advertise-headers"
import AgencyWrapper from "./animations/agency-wrapper"
import AdvertiseDescrip from "./animations/advertise-descrip"

const Advertise = ( { mobile }) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='advertise-outer-div' id="advertise-container">
            <div className='advertise-inner-div' ref={ref}>
                <div className='advertise-top-div'>
                    <div className="advertise-top-left-div">
                        <AdvertiseHeaders visible={visible}/>
                    </div>
                    <div className="advertise-top-right-div">
                        <AdvertiseDescrip visible={visible} />
                    </div>
                </div>
                <div className="advertise-bottom-div">
                    <AgencyWrapper visible={visible} mobile={mobile}/>
                </div>
            </div>      
         
        </div>
    )
}


export default Advertise
