import React ,{useState} from 'react'
import '../components/navbar.css'
import Login from './Login.js'
import Signup from './Signup.js'
export default function Navbar() {
  const[active,setActive]=useState('navMenu');
  const[toggleIcon,setToggleIcon]=useState('toggle')
  const[showLogin,setLogin]=useState(false);
  const[showSignup,setSignup]=useState(false);
  const NavToggle=()=>{
    setActive(active === 'navMenu' ? 'navMenu nav_active' : 'navMenu');
    setToggleIcon(toggleIcon === 'toggle' ? 'toggle_active .toggly' : 'toggle');
  }
  const toggleLogin=()=>{
    setLogin(!showLogin);
    setSignup(false);
  }
  const toggleSignup=()=>{
    setSignup(!showSignup);
    setLogin(false);
  }
  const [loginVisible, setLoginVisible] = useState(true);

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };
  return (
    <nav className='nav'>
      <a className='hello'>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="M260-361v-40H160v-80h200v-80H200q-17 0-28.5-11.5T160-601v-160q0-17 11.5-28.5T200-801h60v-40h80v40h100v80H240v80h160q17 0 28.5 11.5T440-601v160q0 17-11.5 28.5T400-401h-60v40h-80Zm298 240L388-291l56-56 114 114 226-226 56 56-282 282Z" fill="white"/>
</svg>
FinVista</a>
      <ul className={active}>
        <li className='navItem'><a className='navItem'>Products</a></li>
        <li className='navItem'><a className='navItem'>Support</a></li>
        <li className='navItem'><a className='navItem'>Company</a></li> 
        <li className='navItem'><a className='navItem'>Get Dashboard</a></li> 
        <li className='navItem'><button className='navItem butto xyz' onClick={toggleLogin}>Login</button></li>
        <li className='navItem'><button className='navItem butto' onClick={toggleSignup}>SignUp </button></li>
        {showLogin && <Login onClose={handleCloseLogin}/>}
        {showSignup && <Signup/>}
      </ul>
      <div onClick={NavToggle} className='toggle'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}
