import React from "react"



 const AgencyDetails = ({className, title, brands}) => {
    
    return (
        <div className={className}>
            <h1 className="agency-details-header">POSITIONS HELD</h1>
            <p>{title}</p>
            <h1 className="agency-details-header">BRANDS WORKED ON</h1>
            <p>{brands}</p>
        </div>
    )
}


export default AgencyDetails