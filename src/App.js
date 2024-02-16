import React, { Component } from 'react'
// import Counter from './Counter/Counter'
import Comp1 from './Component/Comp1'
import Comp2 from "./Component/Comp2"
import Comp3 from './Component/Comp3'
import Bottom from './Component/Bottom'
// import "./App.css"

export default class App extends Component {

  render(){
    return(
      <>
      <section className='App-left' style={{display:"flex",gap:"1vh",justifyContent:"center",}}>
      <div className='left-part' style={{display:"flex ",flexDirection:"column",gap:"1vh"}}>
      <Comp1></Comp1>
      <Comp2></Comp2>
      </div>
      <div className='app3'>
        <Comp3></Comp3>
      </div>
      </section>
      <Bottom/>
      
    

      </>
    )
  }
  // constructor(prop) {
  //   super(prop)
  //   this.state = {
  //     count: 0,
  //     loginPage: false
  //   }
  // }

  // incrimentHeandler = () => {
  //   // this.setState({ count: this.state.count + 1 })
  //   this.setState(this.setState((previous)=>{ return{count:previous.count+1}}))
  // }
  // dicrimentHeandler = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }
  // resetHeandler = () => {
  //   this.setState({ count: this.state.count * 0 })
  // }
  // loginHeandler = () => {
  //   this.setState({ loginPage: !this.state.loginPage })
  // }
  // render() {
  //   if(this.state.loginPage){
  //     return (
  //       <div>
  //         <Counter count={this.state.count} incrimentHeandler={this.incrimentHeandler} dicrimenttHeandler={this.dicrimentHeandler} resetHeandler={this.resetHeandler} />
  //         <button onClick={this.loginHeandler}>logOut</button>
  //       </div>
  //     )
  //     }
  //     else
  //     return (
  //       <div>
  //         <h1>you need login</h1>
  //         <button onClick={this.loginHeandler}>login</button>

  //       </div>
  //     )

    
  // }
 
}
