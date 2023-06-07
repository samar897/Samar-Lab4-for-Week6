import React from 'react'
import { Link} from 'react-router-dom';


export default function Booklist() {
  return (
    <div>
    <br/>
<Link to="/Book/1">Book1</Link>
<Link to="/Book/2">Book2</Link>
<Link to="/Book/3">Book3</Link>
<br/><br/><br/>
    </div>
  )
}
