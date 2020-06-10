import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import ExerciceList from "./components/exercice-list";
import EditExercice from "./components/edit-exercice";
import CreateExercice from "./components/create-exercice";
import CreateUser from "./components/create-user";
import Navbar from "./components/navbar";
function App() {
  return (
  <Router>
 <div className ="container-fluid">
   <Navbar />
  <br />
  <Route path ="/" exact component={ExerciceList} />
  <Route path ="/edit/:id" exact component={EditExercice} />
  <Route path ="/create" exact component={CreateExercice}  />
  <Route path ="/user" exact component={CreateUser} />
  </div>


  </Router>
  );
}

export default App;
