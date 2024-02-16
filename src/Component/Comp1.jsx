import React, { Component } from 'react'
import  {AiFillHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
// import "./c1.css"

export default class Comp1 extends Component {
  render() {
    return (
      <div>
        <section className='first-left' style={{borderRadius:"1vw",padding:"1vh",height:"20vh",width:"25vw",backgroundColor:"#121212",display:"flex",flexDirection:"column", gap:"2vh",justifyContent:"center",alignItems:"cenetr"}}>
          {/* <div style={{ display:""}}>
            <a href="" style={{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"1vw",display:'inline-block',color:"white"}}><AiFillHome/><h2>Home</h2></a>
            <a href="" style={{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"1vw",display:'inline-block',color:"white"}}><AiOutlineSearch/> <h2>Search</h2></a>
          </div>  */}

          <div>
            <span style={{ color:"white" ,fontSize:"2vw",padding:"2vw"}}>


          <AiFillHome/>
            </span>
          <a href="" style={{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"1vw",display:'inline-block',color:"white"}}>
            <h2>Home</h2></a>


          </div>

          <div>
            <span style={{color:"white",fontSize:"2vw",padding:"2vw"}}>

          <AiOutlineSearch/>
            </span>
          <a href="" style={{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"1vw",display:'inline-block',color:"white"}}> <h2>Search</h2></a>

          </div>

        
        </section>
        
      </div>
    )
  }
}
