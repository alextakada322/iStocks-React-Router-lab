// import route and our components
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Dashboard from "./pages/Dashboard"
import Nav from "./components/Nav"

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route 
        path="/stock/:symbol" 
        render={(routerProps) => <Stock {...routerProps} />}
        />
      </Routes>
    </div>
  );
}

export default App;