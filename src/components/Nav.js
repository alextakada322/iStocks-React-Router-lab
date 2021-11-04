import React from "react"
import {Link} from "react-router-dom"

function Nav (props) {
    return(
        <div className="nav">
            <Link to ="/">
                <div>iStocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to ="/dashboard">
                <div>Dashboard</div>
            </Link>
        </div>
    );
};
  
export default Nav;