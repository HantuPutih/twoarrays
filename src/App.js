import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
