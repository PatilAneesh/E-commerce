import React,{useState} from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Page from '../mainpage/Page'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import {store} from './store'
function Container() {
    // console.log(store,77)
    const [data,setData]=useState(store)
    const [cart,setCart]=useState([])
  //  console.log(cart,"10")
  return (
    <>
    <Leftsidebar data={data} setData={setData}/>
    <Page data={data} cart={cart} setCart={setCart}/>
    <Rightsidebar cart={cart} setCart={setCart}/>
    </>
  )
}

export default Container