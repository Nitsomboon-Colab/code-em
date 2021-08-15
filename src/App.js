import Landing from "./views/Landing";
import Home from "./views/Home";
import NavbarComponent from "./components/NavbarComponent";
import Login from "./views/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Landing />
    </>
  );
}

export default App;
