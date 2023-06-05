import "./Mail.css"
import React from 'react'

const Mail = () => {
    return (
        <div className="mailto">
            <h1 className="mailHead">Save you Time & Money</h1>
            <h2 className="mailSub">We'll send you the best Deals Possible</h2>
            <div className="mailContainer">
                <input type="text" placeholder="Enter your Email address" className="mailInput" />
                <button className="mailSubscribe">Subscribe</button>
            </div>
        </div>
    )
}

export default Mail
