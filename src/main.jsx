import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 





// function Welcme(props){
//   return <h1>hello ,{props.lname}</h1>
// }


// let params={
//   lname:'saddam hossain khan',
//   fname:'hossain',
//   Image1


// }
// let welc = <Welcme  {...params}/>


// function MuN(user){
//   if(user){
//     return(
//       <span>you {user} </span>
//     )
//   }
//   else{
//     return (
//       <h1>hello stranger!</h1>
//     )
//   }
// }


// let el  = <a href='https://www.facebook.com'>link</a>

// let elm = <h1>hello , world</h1>


let root = ReactDOM.createRoot(document.getElementById('root'));
  
//  function Tick(){
//   let elem = (
//     <div>
//       <h1>hello world</h1>
//       <h2>it is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )



//   root.render(
//     <div>
//       {welc}
//       elem
//       <h1>{el} </h1>
//     {elm}
//     <h1>hello {MuN('saddam')} how are you?</h1>
//     <img src={params.Image1}/>
//     <App/>
//     </div>
//   )
// }
// setInterval(Tick,1000)
// function Mlock(props){
//   return(
//     <div>
//       <h1>hello world</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// class Mlock extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hello world</h1>
//         <h2>{this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }


// class Mlock extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       date:new Date(),
//       name:"babul hossain"
//     }
//   }
//   componentDidMount(){
//     this.timerId=setInterval(()=>this.tick(),1000)
//   }

//   componentWillUnmount(){
//     setInterval(this.timerId)
//   }
//   tick(){
//     this.setState({
//       date:new Date()
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>hello {this.state.name}</h1>
//         <h2>the time is now: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

 
  
 
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
       
    </React.StrictMode>,
  )
  
  