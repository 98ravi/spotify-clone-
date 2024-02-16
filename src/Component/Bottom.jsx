import React, { Component } from 'react'

export default class Bottom extends Component {
  render() {
    return (
    <>
      <div style={{height:"10vh" ,backgroundImage: `linear-gradient(to left,#ae2997,#5f88e6)`,
      justifyContent:"space-between",padding:"1vw",
      display:"flex"}}>
        <div>
            <p style={{fontSize:"1vw",color:"white"}}>PREVIEW OF SPOTIFY</p>
            <h3 style={{fontSize:"1.5vw",color:"white"}}>Single up to get unlimited songs and podcasts with accasion ads.No cread card</h3>
        </div>
        <div>
        <button style={{fontSize:"1vw",borderColor:"white",color:"black",outline:"none" ,border:"none",borderRadius:"10vw",height:"6vh",width:"12vw"}}>Sign up free</button>

        </div>
      </div>
    </>
    )
  }
}
