import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavEmergencias from "./components/navbar";
import Footer from "./components/footer";
import PageHome from "./pages/page-home";
import PagePuestos from "./pages/page-puestos";
import PagePerfil from "./pages/page-perfil";

function App() {
  return (
    <Router>
      <NavEmergencias />
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/perfil" component={PagePerfil} />
        <Route path="/puestos" component={PagePuestos} />]
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
