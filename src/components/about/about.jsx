import { useState, useRef, useEffect} from "react"
import "./css/about.css"
import useIntersection from "../_utils/useIntersection";
import pic from "../../images/about.jpg"
import jojo from "../../images/jojo.jpg"
import { BsArrowDown } from "react-icons/bs"
import AboutMe from "./animations/descrip-wrapper";
import AboutHeader from "./animations/about-header";
import circle from "../../images/svg/gray-circle.svg"
import AboutImgs from "./animations/about-imgs";

const About = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className="about-outer-div" id="about-container">
                <div className="about-img-wrapper">
                    <AboutImgs visible={visible} />
                </div>
            <div className="about-inner-div">
                <img className="about-circle" src={circle} ref={ref}  />
                <div className="about-descrip-wrapper">
                    <AboutHeader visible={visible} />
                    <AboutMe visible={visible}/>
                </div>
           
            </div>        
        </div>
    )
}

export default About