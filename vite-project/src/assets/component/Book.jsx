import React from 'react'
//import { useParams } from "react-router";
import { Link} from 'react-router-dom';


import { useParams } from "react-router";


export default function Book() {

    const { id } = useParams();
    console.log(id); 


  return (
    <div>

<center>
   <br/><br/><br/><br/><br/>

            <p> Book1 here with id {id}</p>

            <br/><br/><br/><br/><br/>
          </center>


      
    </div>
  )
}

