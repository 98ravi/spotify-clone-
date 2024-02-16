import React, { Component } from 'react'
import { BiLibrary } from 'react-icons/bi'
import { AiOutlineGlobal } from 'react-icons/ai'
// import "./c2.css"

export default class Comp2 extends Component {
  render() {
    return (
      <div>
        <section className='left-second' style={{ borderRadius: "1vw", height: "68vh", width: "25vw", backgroundColor: "#121212", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", height: "10vh", width: "23vw", backgroundColor: "#121212", color: "white", justifyContent: "space-between" }}>
            <BiLibrary />
            <p style={{ fontSiz: ".5vw" }}>Your Library</p>
            <h2 style={{ fontSize: "2vw" }}>+</h2>


          </div>
          <div className='scroll' style={{ height: "15vh", width: "23vw", backgroundColor: "black", overflowY: "scroll", color: "white", gap: "5vw", padding: "1vw" }}>
            <div className='playlist' style={{ backgroundColor: "#242424", display: "flex", gap: "2vh", borderRadius: "2vw", flexDirection: "column", marginBottom: "1vw", padding: "2vw" }}>
              <h2 style={{ fontSize: "1vw" }}>Create your first playlist</h2>
              <p style={{ fontSize: "1vw" }}>It's easy ,we'll help you</p>
              <button style={{ fontSize: "1vw", borderColor: "white", color: "black", outline: "none", border: "none", borderRadius: "10vw", height: "5vh", width: "10vw" }}>Create playlist</button>
            </div>
            <div className='playlist' style={{ backgroundColor: "#242424", display: "flex", borderRadius: "2vw", flexDirection: "column", gap: "2vh", padding: "2vw" }}>
              <h2 style={{ fontSize: "1vw" }}>Lets find some podcast to follow</h2>
              <p style={{ fontSize: "1vw" }}>we'll keep update on new episodes</p>
              <button style={{ fontSize: "1vw", borderColor: "white", color: "black", outline: "none", border: "none", borderRadius: "10vw", height: "5vh", width: "10vw" }}>Create playlist</button>
            </div>
          </div>
          <div className='coock' style={{ display: "flex", flexDirection: "row", gap: "2vh", padding: "2vw", fontSize: "1vw", flexWrap: "wrap" }}>
            <a href="" style={{ color: "white", textDecoration: "none" }}>Ligal</a>
            <a href="" style={{ color: "white", textDecoration: "none" }}>Privacy Center</a>
            <a href="" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
            <a href="" style={{ color: "white", textDecoration: "none" }}>Cookies</a>
            <a href="" style={{ color: "white", textDecoration: "none" }}>About</a>
            <a href="" style={{ color: "white", textDecoration: "none" }}>Accessibility</a>
            <a href="" style={{ color: "white", textDecoration: "none" }}>Cookies</a>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2vh", fontSize: "1vw", flexWrap: "wrap", height: "15vh", width: "23vw" }}>
            <button style={{ fontSize: "1vw", borderColor: "white", color: "white", outline: "none", backgroundColor: "black", border: "none", borderRadius: "10vw", height: "5vh", width: "10vw" }}><AiOutlineGlobal /> Create playlist</button>
          </div>

        </section>

      </div>
    )
  }
}
