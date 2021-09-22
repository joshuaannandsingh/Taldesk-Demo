import React from 'react'
import Header from './components/Header'
import AddCustomerToQueue from './components/AddCustomerToQueue'
import logo from './talkdesk_logo_purple-small-sizes.png'
import picture from './gartner-2021-leader-light-870x580.png'
const App = () => {
  
  
  
  return (
    <div>
    <div className ='header-container' >
      <img  src={logo}/>
      <Header title="SUBMIT A CALLBACK REQUEST"/>
      
    </div>
    <div className='container'>
    <AddCustomerToQueue/>
    </div>
    
    <div className='container-2'>
        <img src={picture}/>
    </div>
    
    </div>
  )
}

export default App

