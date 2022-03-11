import { useState, useRef, useEffect} from "react"
import "./css/about.css"
import useIntersection from "../_utils/useIntersection";
import pic from "../../images/about.jpg"
import jojo from "../../images/jojo.jpg"
import { BsArrowDown } from "react-icons/bs"
import AboutMe from "./animations/descrip-wrapper";
import AboutHeader from "./animations/about-header";
import circle from "../../images/svg/gray-circle.svg"

const About = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className="about-outer-div">
                <div className="about-img-wrapper">
                    <img className="about-pic" src={pic} />
                    <img className="jojo-pic" src={jojo} />
                    {/* <h1 className="me-caption">This is me</h1>
                    <BsArrowDown className="me-arrow"/> */}
                    {/* <h1 className="rollie-caption">This is Rollie</h1>
                    <BsArrowDown className="rollie-arrow"/>
                    <h1 className="jojo-caption">This is Jojo</h1>
                    <BsArrowDown className="jojo-arrow"/> */}
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