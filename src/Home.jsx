import React from 'react'
import Cards from './components/Home/Cards'
import Footer from './components/Home/Footer'
import HomeMain from './components/Home/HomeMain'
import Navbar from './components/Home/Navbar'
import Organisations from './components/Home/Organisations'
import './home.scss'

const Home = () => {
  return (
    <div>
        <div className="home">
            <Navbar/>
            
                <HomeMain/>
                <Cards/>
                <Organisations/>
                
                
            
            <Footer/>
            
    </div>


    </div>
  )
}

export default Home
