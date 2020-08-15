import React from 'react';
import Generator from './Generator';
import Form from './Form';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';
function App (){
   return(
      <Router>
         <div className='App'>
         <Switch>
         <Route exact path='/' component={Form}/>
         <Route exact path='/Generator' component={Generator}/>
         </Switch>
      </div>
      </Router>
   );
}

export default App;





