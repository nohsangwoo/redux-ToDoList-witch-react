import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../route/Detail";
import Home from "../route/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
