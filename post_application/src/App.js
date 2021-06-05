
import './comp.css';
import Header from "./MyComponents/Header";

import Right from "./MyComponents/Right";
import Left from "./MyComponents/Left";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Posts from "./MyComponents/Posts";
import CreatePost from "./MyComponents/CreatePost";

function App() {
  return (
    <div className="body">
      <div className="container1">
        <Router>
        <Header/>
        <Left/>
        <Switch>
          <Route exact path='/'>
            <Posts/>
          </Route>
          <Route exact path='/create'>
            <CreatePost/>
          </Route>
        </Switch>
        <Right/>
        </Router>


      </div>


    </div>
  );
}

export default App;
