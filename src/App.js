import './App.css';
import {Redirect, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <p className='text-center m-0 bg-black'>Advance Medico</p>
       <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" exact>
            {<p>Home</p>}
          </Route>
          <Route path="/add">
            {<p>Add Patient</p>}
          </Route>
          <Route path="*">
            {<p>ERROR</p>}
          </Route>
       </Switch>
    </div>
  );
}

export default App;
