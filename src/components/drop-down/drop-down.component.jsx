import React from "react"
import "./drop-down.component.styles.css"
import {Link} from "react-router-dom"

const Dropdown=()=>(
<div className="DropDown">
   <Link className="link"to="/">

<h3>Home</h3>
  </Link>
  <Link className="link" to="/aboutus">

  <h3>About us</h3>
  </Link>

	</div>
	)


	export default Dropdown;