import React, { Component } from 'react'
import Image1 from './Image1'
import './Image1.css'
export class Time1 extends Component {
   
    constructor(){
        super()
        this.state={
            time:5
        }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }
    tick = () =>{
        if(this.state.time!==0)
        {
            this.setState({
                time:this.state.time-1
            })
        }
        else{
            alert('time is up');
            console.log("enough")
            
            
            
        }
    }
    

     restart=()=>{
        
        window.location.reload(true)
     }
    

  render() {
    return (
     
      <div>
        <h3 id='msg1'>you can beat me up to time ends with countdown :{this.state.time}</h3>
        <h2 id='left'>....HiFi....!✋🏻</h2>
        <h2 id='right'>....HiFi....!✋🏻</h2>
        <div id='img1'> <Image1/> </div>
        <button onClick={this.restart} id='restart'>restart</button>
       
       
        </div>
    )
  
}}


export default Time1