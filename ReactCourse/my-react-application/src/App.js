
//import { useState } from 'react';
import './App.css';
//import { Routes,Route } from 'react-router-dom';
//import Home from './components/Routing/Home';
//import AboutUs from './components/Routing/AboutUs';
//import Error from './components/Routing/Error';
//import React, {Suspense} from 'react';
//import LazyLoadingCompB from './components/LazyLoadingCompB';
//import {add} from './components/Maths.js'
//import ControlledComponent from './components/ControlledComponent';
//import HOCFunctionalCompA from './components/HOCFunctionalCompA';
//import HOCFunctionalCompB from './components/HOCFunctionalCompB';
//import FormValidationUsinguseForm from './components/FormValidationUsinguseForm';
//import DynamicForm from './components/DynamicForm';
//import LoginValidate from './components/LoginValidate';
import Navbar from './components/Navbar';
import UseMemoHookInClass from './UseMemoHookInClass';
//import MemoExample from './MemoExample';
//import FrontEnd from './components/FrontEndLayOut/FrontEnd';
//import BackEnd from './components/BackEndLayOut/BackEnd';
// import Home from './components/Home';
// import Admin from './components/Admin';
// import About from './components/About';
// import Settings from './components/Settings';
//import MyHighCharts from './components/HighChartsExamples/MyHighCharts';
//import AboutUs from './components/Routing/AboutUs';
//import Auth from './components/PublicProtectedRoutes/Auth';
//import Dashboard from './components/PublicProtectedRoutes/Dashboard';
//import { useState } from 'react';
//import Contact from './components/Routing/Contact';
//import UnControlledComponent from './components/UnControlledComponent';
//import UsefetchHook from './components/UsefetchHook';
//import UseQueryHook from './components/UseQueryHook';
//import UseFieldArray from './components/UseFieldArray';
//import UseFormHook from './components/UseFormHook';
//import UseStateShowHideToggle from './components/UseStateShowHideToggle';
//import UseLayoutEffect from './components/UseLayoutEffect';
//import UseLoggerInput from './components/UseLoggerInput';
//import UseImperativeParent from './components/UseImperativeParent';
//import UsecallbackParent from './components/UsecallbackParent';
//import UseMemo from './components/UseMemo';
//import UseContext1 from './components/UseContext1';
//import UseReducer from './components/UseReducer';
//import UseRef from './components/UseRef';
//import ContextAPIOne from './components/ContextAPIOne';
//import Hooks1 from './components/Hooks1';
//import Hooks2 from './components/Hooks2';
//import MouseClickCounter from './components/MouseClickCounter';
//import MouseHoverCounter from './components/MouseHoverCounter';
//import AxiosWithUpdate from './components/AxiosWithUpdate';
//import FormHanding from './components/FormHanding';
//import PropsRender from './components/PropsRender';
//import PortalExample from './components/PortalExample';
//import RefForWardingParent from './components/RefForWardingParent';
//import RefOneParent from './components/RefOneParent';
//import NonPureComponent from './components/NonPureComponent';
//import PureComponentClass from './components/PureComponentClass';
//import RefOne from './components/RefOne';
//import ParentOfFirstsecond from './components/ParentOfFirstsecond';
//import RandomUserFetch from './components/RandomUserFetch';
//import ParentComponent from './components/ParentComponent';
//import ToggleBackground from './components/ToggleBackground';
//import TextForm from './components/TextForm';
//import('./components/Maths.js').then(maths => {
//  console.log('Sum is', maths.add(10,20));
//})
//console.log('Sum is : ',add(5,6));

//const First = React.lazy(() => import('./components/LazyLoadingcompA'))
function App() {
 // const [user, setUser] = useState(false)
//  const [count, setCount] = useState(0)
//  const [data,setData] = useState(1)
//  const increment = () =>{
//    setData(2)
//    setCount(count+1)
//  }
  return (
   <>
      <Navbar title="React Demo Application" about="About Us"/>
       {/*<TextForm title="Enter the text below"/>
       
       <ToggleBackground/>

       <ParentComponent/>

       <FormHanding/>

       <ParentOfFirstsecond/>

       <RandomUserFetch/>

       <AxiosWithUpdate/>

       <NonPureComponent/> 
       
       <PureComponentClass/>
      
      <RefOne/>
     <RefOneParent/>

      <RefForWardingParent/>
      
      <PortalExample/> 
       
   <MouseClickCounter name='MouseClickCounter Component'/>
   <MouseHoverCounter name='MouseHoverCounter Component'/>
    
   <PropsRender render={(param) => `Hi I am Props Render Body--------${param}`}/> 
    
    <ContextAPIOne/>
    
    <Hooks1/>
    
    <Hooks2/>
    
    <UseContext1/>
   
   <UseReducer/>
   
   <UseMemo/>
  
  <UsecallbackParent/>
   
   <UseRef/>
  
   <UseImperativeParent/>

  <UseLayoutEffect/>     
  
  <UseLoggerInput/>
  
  <UseStateShowHideToggle/>
  
  <LoginValidate/>
 
 
  <DynamicForm/>
  
  <UseFormHook/> 
 
 <UseFieldArray/>
 
 <FormValidationUsinguseForm/>

<UsefetchHook/>

<UseQueryHook/>
 
 
  <HOCFunctionalCompA name={'A'}/>
<HOCFunctionalCompB name={'B'}/>
 


<UnControlledComponent/>
<ControlledComponent/>  


   <Suspense fallback={<><div className='spinner-border spinner-border-sm text-primary'></div>&nbsp;<span className='text-primary'>Loading</span></>}>
     <First/>
   </Suspense>
  <LazyLoadingCompB/>
  
  
  <Routes>
       <Route index element={<Home/>} />
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/contact/:id' element={<Contact/>}/>
       <Route path='*' element={<Error/>}/>
       <Route path='*' element={<Navigate to='/'/> }/> 
       </Routes>


<Routes>
{!user && <Route path='/auth' element={<Auth auth={() => setUser(true)}/>}/>}
{user && <Route path='/dashboard' element={<Dashboard logoutuser={() => setUser(false)}/>}/> }
</Routes>



<Routes>
    <Route path='/' element={<FrontEnd/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
    </Route>
    <Route path='/admin' element={<BackEnd/>}>
        <Route index element={<Admin/>}/>
        <Route path='settings' element={<Settings/>}/>
    </Route>
    <Route path='*' element={<Error/>} />
  </Routes>

  
   <MyHighCharts/>
 
  <button className='btn btn-primary m-3' onClick={() => increment()} > + {count} Count</button>
  <MemoExample data={data}/>
  */}

<UseMemoHookInClass/>
  
 
  
       
    
    
       
       
       

   </>
  );
}




export default App;
