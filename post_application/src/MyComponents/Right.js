import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { withRouter } from 'react-router-dom'


function Right() {
    return (
        <div className="right">
            <div>

                
                <Link to='/create'>
                    <button type="button" className="btn btn-info">Make a post</button>
                </Link>
                <Link to='/'>
                    <button type="button" className="btn btn-info">Home</button>
                </Link>







            </div>
        </div>
    )
}

export default (Right);
