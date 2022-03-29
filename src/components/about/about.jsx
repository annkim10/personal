import { useState, useRef, useEffect} from "react"
import "./css/about.css"
import useIntersection from "../_utils/useIntersection";
import line from "../../images/line.svg"
import AboutMe from "./animations/descrip-wrapper";
import AboutHeader from "./animations/about-header";
import AboutImgs from "./animations/about-imgs";

const About = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className="about-outer-div" id="about-container" ref={ref} >
            <div className="about-inner-div">
                <div className="about-left-div">
                    <div className="about-img-wrapper">
                        <AboutImgs visible={visible} />
                    </div>
                </div>
                <div className="about-right-div">
                    <div className="about-text-wrapper">
                        <div className="header-wrapper">
                            <AboutHeader visible={visible} />
                        </div>
                        <AboutMe visible={visible}/>
                    </div>
                </div>
               
            </div>
           
        </div>
    )
}

export default About