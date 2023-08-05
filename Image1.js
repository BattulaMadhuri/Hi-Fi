import React, { Component } from 'react'
import './Image1.css'
 class Image1 extends Component {
    constructor()
    {
        super()
        this.state={
            score:0,
            name:"PANDA"
        }
    }
    componentDidMount(){
        document.title=`${this.state.name}`
    }
    
  render() {
    return (

      <div>
        <button onClick={()=>{
            this.setState({score:this.state.score+1})
        }}><img src="https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg" alt="" width="400px" height="400px"
        /></button>
       <div><h1 id='score'>Score:{this.state.score}</h1></div> 
       
        </div>
    )
  }
}

export default Image1