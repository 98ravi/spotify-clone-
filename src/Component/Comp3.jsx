import React, { Component } from 'react'
// import "./c3.css"
import om from "./om.jpg"
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import viva from '../Assets/eighth.jpg'
import Untitled from "../Assets/Untitled.jpg";
import second from "../Assets/second.jpg";
import third from "../Assets/third.jpg";
import fourth from "../Assets/fourth.jpg";
import fifth from "../Assets/fifth.jpg";
import sixth from "../Assets/sixth.jpg";
import seventh from "../Assets/seventh.jpg";
import eighth from "../Assets/eighth.jpg";
import nineth from "../Assets/nineth.jpg";
import tenth from "../Assets/tenth.jpg";
import eleventh from "../Assets/eleventh.jpg";
import twelve from "../Assets/twelve.jpg";
import thirteen from "../Assets/thirteen.jpg";
import fourteen from "../Assets/fourteen.jpg";
import last from "../Assets/last.jpg";
import tophits from "../Assets/tophits.jpg";
import { BsAlignBottom } from "react-icons/bs";
import { CgPlayButtonO } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { PiCopyrightThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";


export default class Comp3 extends Component {
  render() {
    return (
      <div>
        <div className='heading' style={{ height: "10vh", width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center" }}>
          <div style={{ display: "inline-block", padding: "1vw", color: 'white' }}>
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
          <div style={{ display: "inline-block" }}>
            <button style={{ fontSize: "1vw", borderColor: "white", color: "black", outline: "none", border: "none", borderRadius: "10vw", height: "5vh", width: "10vw", backgroundColor: "yellow" }}>Sign in</button>
            <button style={{ fontSize: "1vw", borderColor: "white", color: "black", outline: "none", border: "none", borderRadius: "10vw", height: "5vh", width: "10vw" }}>Sign up</button>
          </div>
        </div>


        <section className='copm3' style={{ height: "79vh", width: "72vw", backgroundColor: "#1e1e1e", overflowY: "scroll", displayL: "flex", gap: "2vw" }}>
          <div style={{ height: "10vh", width: "72vw", backgroundColor: "#1e1e1e", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center" }}>
            <a href="https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"><h2 style={{ color: "white" }}>focus</h2></a>

          </div>
          <div style={{ width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center", gap: "1vw" }}>
            {/* first card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${second})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* second card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${third})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* third */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>

            {/* forth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fifth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* fifth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${sixth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>


            {/* 6th */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${seventh})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>



          </div>


          <div style={{ height: "10vh", width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center" }}>
            <a href="https://open.spotify.com/playlist/3MSEZ4IGrSMnWNIwnYmPtd"><h2 style={{ color: "white" }}>Spotify Playist</h2></a>

          </div>
          <div style={{ width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center", gap: "1vw" }}>
            {/* first card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${eighth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* second card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${nineth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* third */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${tenth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>

            {/* forth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${eleventh})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* fifth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourteen})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>


            {/* 6th */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fifth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>



          </div>


          {/* third  card  */}


          <div style={{ height: "10vh", width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center" }}>
            <a href="https://open.spotify.com/playlist/3MSEZ4IGrSMnWNIwnYmPtd"><h2 style={{ color: "white" }}>Sound Of Indian</h2></a>

          </div>
          <div style={{ width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center", gap: "1vw" }}>
            {/* first card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${sixth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* second card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${thirteen})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* third */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${twelve})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>

            {/* forth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fifth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* fifth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${nineth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>


            {/* 6th */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${eleventh})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>



          </div>

          <div style={{ width: "72vw", backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", alignItems: "center", gap: "1vw" }}>
            {/* first card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${second})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* second card */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* third */}
            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourteen})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>

            {/* forth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>
            {/* fifth */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
            </div>


            {/* 6th */}

            <div style={{ height: "30vh", width: "12vw", backgroundColor: "#1e1e1e", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1vh" }} >
              <div style={{
                height: "15vh", width: "10vw", backgroundImage: `url(${fourth})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center"
              }} >
                {/* <img src={viva} alt="" height={150} width={150} /> */}


              </div>
              <h3 style={{ color: "white", fontSize: "1vw" }}>peaceful Piano</h3>
              <p style={{ color: 'white', fontSize: "1vw" }}> Peaceful piano to help you slow down,breath,and relex.</p>
          </div>
          </div>
          <div className='footer' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "1vw" }}>
            <div>
              <h2 style={{ color: "white", fontSize: "1vw" }}>company</h2>
              <ul style={{ color: 'white', listStyle: "none", display: "flex", flexDirection: "column", gap: "2vw" }}>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">About</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">jobs</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">About</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">For the Record</a></li>
              </ul>
            </div>
            <div>
              <h2 style={{ color: "white", fontSize: "1vw" }}>company</h2>
              <ul style={{ color: 'white', listStyle: "none", display: "flex", flexDirection: "column", gap: "2vw" }}>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">About</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">jobs</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">About</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">For the Record</a></li>
              </ul>
            </div>
            <div>
              <h2 style={{ color: "white", fontSize: "1vw" }}>company</h2>
              <ul style={{ color: 'white', listStyle: "none", display: "flex", flexDirection: "column", gap: "2vw" }}>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">About</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">jobs</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">About</a></li>
                <li><a style={{ color: "white", textDecoration: "none", fontSize: "1vw" }} href="">For the Record</a></li>
              </ul>
            </div>
            <div style={{ display: "flex", padding: "2vw", color: "white", fontSize: "2vw", gap: "2vw" }}>
              <div>
                <AiFillInstagram />
              </div>
              <div>
                <BsFacebook />
              </div>
              <div>
                <AiFillTwitterCircle />
              </div>
            </div>
          </div>
          <div style={{ height: "0.2vw", marginTop: "2vw", backgroundColor: "white" }}>
                
          </div>
          <div>
            <p style={{ color: "white ", size: "1vw" }}>© 2023 Spotify AB</p>
          </div>
        </section>
      </div>
    )
  }
}

