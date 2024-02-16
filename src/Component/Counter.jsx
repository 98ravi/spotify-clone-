import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <article>   
        <h1>{this.props.count}</h1>
        <button onClick={this.props.incrimentHeandler}>+</button>
        <button onClick={this.props.dicrimenttHeandler}>-</button>
        <button onClick={this.props.resetHeandler}>reset</button>

        </article>
        
      </div>
    )
  }
}
