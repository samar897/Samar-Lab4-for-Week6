import Footer from "./assets/component/Footer";
import Nav from "./assets/component/Nav";
import { Route, Routes, Link } from 'react-router-dom';

import About from "./assets/component/About";
import Notfound from "./assets/component/Notfound";
import Book from './assets/component/Book';
import Booklist from './assets/component/Booklist';

import {  
  Box,
} from '@chakra-ui/react'



//<Route path="/Book/:id" element={<p> Book1 here with id {id}  </p> } > </Route>

function App() {

  return ( 

<Box>

<Nav></Nav>
<br/>


<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/book">Book</Link>

<br/><br/><br/>

<Routes>

<Route path="/" element={<p>Home Page</p>}></Route>  
<Route path="/about" element={<About/>}></Route>
<Route path="/*" element={<Notfound/>}></Route>
<Route path="/book" element={ <Booklist/> } > </Route>
<Route path="/book/:id" element={ <Book/> } > </Route>
</Routes>


<Footer></Footer>
</Box>

  )
}

export default App

