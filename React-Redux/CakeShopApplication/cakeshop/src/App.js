
import './App.css';
import CakeContainer from './cake/components/CakeContainer';
import IceCreamcontainer from './cake/components/IceCreamcontainer';
import NewCakeContainer from './cake/components/NewCakeContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <div className="App">
    {/* <CakeContainer/>
    <IceCreamcontainer/>
    <NewCakeContainer/> */}
    <UserContainer/>
    </div>
  );
}

export default App;
