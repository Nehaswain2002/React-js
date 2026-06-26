import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
  <div className="parent">
  <Card user='Aman' age={18} img='https://i.pinimg.com/736x/0a/17/92/0a1792d86bb030516d1505099f4094ff.jpg'/>
  <Card user='Neha' age={22} img='https://www.shutterstock.com/shutterstock/photos/2404973101/display_1500/stock-photo-panda-bear-bubu-dudu-couple-pink-jacket-cute-and-pretty-2404973101.jpg'/>
   <Card user='Guddy' age={21} img='https://i.pinimg.com/736x/20/e4/ba/20e4ba5995d15f26fba825eb91bf2d36.jpg'/>
   </div>
  )
}

export default App
