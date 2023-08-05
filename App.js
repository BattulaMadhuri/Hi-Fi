import './App.css';
import React from 'react';
import Time1 from './components/Time1';
//import ComponentD from './components/ComponentD';
// import ComponentE from './components/ComponentE';
// import ComponentF from './components/ComponentF';
// import Timer from './components/Timer';
// import FunctionalMousePointer from './components/FunctionalMousePointer';
// import MousePointer from './components/MousePointer';
//import ClassComponentCounter from './components/ClassComponentCounter';
//import FunctionalComponentCounter from './components/FunctionalComponentCounter';
//import EmojiSearch from './components/EmojiSearch';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import NameList from './components/NameList';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import EmojiPicker from 'emoji-picker-react';
// import Navbar from './components/Navbar';
// import ClassCounter from './components/ClassCounter';
// import HoverCount from './components/HoverCount';

export const userContext = React.createContext();
function App(){
  return(
    <div className="App">
      <Time1 /> 
      {/* <userContext.Provider value={'Madhu'}>
        <ComponentD />
      </userContext.Provider> */}
      {/* <ComponentE />
      <componentF /> */}
      {/* <Timer /> */}
      {/* <MousePointer />
      <FunctionalMousePointer /> */}
      {/* <ClassComponentCounter /> */}
      {/* <FunctionalComponentCounter /> */}
      {/* <ClassCounter />
      <HoverCount /> */}
      {/* <Navbar /> */}
      {/* <EmojiPicker /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <NameList /> */}
      {/* <EmojiSearch /> */}
    </div>
  )
}
export default App;


// function App() {
//   return (
//     <div className="App"> 
//     <Message />
//     {/* <Message />
//      <Greet name="Madhu" heroName="Natasha" /> 
//      <Greet name="Tarun" heroName="Iron Man"/> 
//      <Greet name="Mahi" heroName="Thor"/> 
//      <Welcome name="Madhu" /> */}
//     </div>
//   );
// }

// export default App;


// import Calc from './components/Calc';

// function App(){
//   return(
//     <Calc />
//   );
// }
// export default App;


// import BmiCalci from './components/Bmi';

// function App() {
//     return (
//       <div className="App">
//      <BmiCalci/>
//    </div>
//     );
//   }
  
//   export default App;
