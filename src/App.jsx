
// import './App.css'
// import SimpleForm from './Form/SimpleForm';
// import Crud from './local-storage/Crud';
// import Items from './React-Keys/Items';
// import RealWorld from './React-Keys/RealWorld';
// import RenderigList from './RenderigList'
// // import Conditional from './embedding-expression/Conditional'
// // import Calling_function from './embedding-expression/calling_function'
// // import Welcome from './embedding-expression/Welcome'

// import BasicHookForm from "./Form/react-hook-form/BasicHookForm";
// import YupForm from "./Form/yup-react-hook-form/YupForm";
import { ThemeContext } from "./functional-components/hooks/useContext-Hook/ThemeContext";
import Counter2 from "./functional-components/hooks/usereduce-hook/Counter2";
import ShoppingCart from "./functional-components/hooks/usereduce-hook/ShoppingCart";

// import { Route, Routes } from "react-router-dom";
// import ProductPage from "./designs/dynamic-routing-example/ProductPage";
// import ProductDetails from "./designs/dynamic-routing-example/ProductDetails";
// import UseMemo from "./functional-components/hooks/UseMemo-hook/UseMemo";
// import Player from "./functional-components/hooks/useRef-hook/Player";

// import { Route, Routes } from "react-router-dom";
// import Navbar from "./nested-routing/Navbar";
// import Home from './nested-routing/pages/Home';
// import About from './nested-routing/pages/About';
// import Service from './nested-routing/pages/Service';
// import WebDev from './nested-routing/pages/services/WebDev';
// import AppDev from './nested-routing/pages/services/AppDev';
// import Design from './nested-routing/pages/services/Design';

// import { Route, Routes } from "react-router-dom";
// import Product from "./React-router-dom/dynamic-routing/Product";
// import ProductDetailPage from "./React-router-dom/dynamic-routing/ProductDetailPage";

// import { Link, Route, Routes } from "react-router-dom";
// import About from "./React-router-dom/about";
// import Home from "./React-router-dom/Home";

// import AddTodo from "./work/AddTodo"
// import { TodoProvider } from "./work/TodoContext"
// import TodoList from "./work/TodoList"

// import Home from "./functional-components/hooks/useContext-Hook/Home"
// import { UserApiProvider } from "./functional-components/hooks/useContext-Hook/user-list/UserApiContext"
// import { ThemePovider } from "./functional-components/hooks/useContext-Hook/ThemeContext"
// import UserList from "./functional-components/hooks/useContext-Hook/user-list/UserList"


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
      {/* <Counter2/> */}
      <ShoppingCart/>
      {/* <ThemePovider>
        <Home/>
      </ThemePovider> */}
      {/* <UseMemo/> */}
      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}
      {/* <TodoProvider>
        <div style={{maxWidth: '400px', margin: '0 auto', padding: '20px' 
        }}>
          <h2>💬 Todo App </h2>
          <AddTodo />
          <TodoList />
        </div>
      </TodoProvider> */}
      {/* -----------react - router - dom ---------- */}
      {/* --------- 1. basic - Routing -------- */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          

        </nav>
      </div>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>

          </Routes> */}
        

      {/* ------------ 2. dynamic - Routing ------------ */}
      {/* <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
      </Routes> */}
      {/* -------------- 3.Nested - Routing -------------- */}
      {/* <Navbar/>
      <div className="container-app">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/> */}

      {/* nested routing starts here  */}
      {/* <Route path='/services' element={<Service/>}>
              <Route path='Web-development' element={<WebDev/>}>
              <Route path='App-Development' element={<AppDev/>}>
              <Route path='design' element={<Design/>}>

            </Route>

          </Routes>
      </div> */}
      {/* -----------------------react - keys--------------- */}
      {/* <Items /> */}
      {/* <RealWorld /> */}
      {/* <SimpleForm /> */}
      {/* <Crud /> */}
      {/* <Player /> */}


      {/* -------------------------dynamic routing------------------------- */}
      {/* <ProductPage/>  */}
      {/* <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes> */}
      {/* <BasicHookForm/> */}
      {/* ------------------yup with react hook form -------------- */}
      {/* <YupForm/> */}


    </>

  );
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

