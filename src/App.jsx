import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Main from './components/Main'
import Navside from './components/Navside'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div className="main-contant">

      <nav>
        <Header/>
      </nav>

      <div className='sidenav'>
        <Navside/>

      </div>

      <div className='main'>
        <Profile/>

        <Main/>
      </div>

    </div>




    </>
  )
}

export default App
