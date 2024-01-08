import React from 'react'
import './Top.css'
import logo from '../assets/logo2.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from 'react-router-dom';
import Home from '../Pages/Home'
import Memories from '../Pages/Memories'
import Saved from '../Pages/Saved'

const Top = ({theme,setTheme}) => {

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <Router>
    <div className='navbar'>
      <img src={logo} alt='' className='logo'/>
      <h1>MyDay</h1>
      <ul>
      <Link to={"/home"}><li>Home</li></Link>
      <Link to={"/memories"}><li>Memories</li></Link>
      <Link to={'/pictures'}><li>Gallery</li></Link>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=''/>
      </div>
      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon'/>
    </div>
    <div>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      
      <Route path='/memories' element={<Memories/>}/>
      
      <Route path='/pictures' element={<Saved/>}/>
        
      

      </Routes>
    </div>
    </Router>
  )
  
}

export default Top