
// import './App.css'
// import RenderigList from './RenderigList'
// // import Conditional from './embedding-expression/Conditional'
// // import Calling_function from './embedding-expression/calling_function'
// // import Welcome from './embedding-expression/Welcome'

import Home from "./functional-components/hooks/useContext-Hook/Home"
import { UserApiProvider } from "./functional-components/hooks/useContext-Hook/user-list/UserApiContext"
// import { ThemePovider } from "./functional-components/hooks/useContext-Hook/ThemeContext"
import UserList from "./functional-components/hooks/useContext-Hook/user-list/UserList"


// import Unmount from "./functional-components/hooks/useEffect-hook/Unmount"

// import Ex3 from "./functional-components/hooks/useEffect-hook/Ex3"

// import Ex2 from "./functional-components/hooks/useEffect-hook/Ex2"

// import ToggleButton from "./functional-components/hooks/useState-hook/ToggleButton"

// import NameForm from "./functional-components/hooks/useState-hook/NameForm"

// import UserList from "./functional-components/hooks/useEffect-hook/UserList"

// import Timer from "./functional-components/hooks/useEffect-hook/Timer"



// import Props from "./functional-components/Props"
// import StateHw from "./functional-components/StateHw"

// import Basic from "./functional-components/Basic"
// import State from "./functional-components/State"

function App() {

  return (
    <>
      {/* -------------------Embedding Expression------------------- */}
      {/* <Welcome /> */}
      {/* <Calling_function /> */}
      {/* <Conditional /> */}
      {/* //     <RenderigList /> */}

     {/* ----------------- functional Components-------------------------- */}
      {/* <Basic /> */}
      {/* <State /> */}
      {/* <StateHw /> */}
      {/* <Props /> */}
      {/* --------------------hooks and life cycle methods------------- */}
      {/* <Timer /> */}
      {/* <UserList /> */}
      {/* <NameForm /> */}
      {/* <ToggleButton /> */}
      {/* <Ex2 /> */}
      {/* <Ex3 /> */}
      {/* <Unmount /> */}

      {/* ------------------------------useContext hook----------------------------------- */}
      {/* <ThemePovider>
        <Home/>
      </ThemePovider> */}
      <UserApiProvider>
        <UserList/>
      </UserApiProvider>
      </>
  )
}

export default App
// import React, { Component } from 'react'
// // import ButtonUnMount from './Class-Components/life-cyclec-methods/ButtonUnmount'
// // import Unmounting from './Class-Components/life-cyclec-methods/Unmounting'
// // import Update from './Class-Components/life-cyclec-methods/Update'
// // import Mounting from './Class-Components/life-cyclec-methods/Mounting'
// // import UsingProps from './Class-Components/UsingProps'
// // import Basic from './Class-Components/Basic'
// // import Counter from './Class-Components/Counter'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Basic /> */}
//         {/* <UsingProps name="abi" /> */}
//         {/* <Counter /> */}
//         {/* <Mounting /> */}
//         {/* <Update /> */}
//         {/* <Unmounting /> */}
//         {/* <ButtonUnMount /> */}
//       </div>
//     )
//   }
// }

