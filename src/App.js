import Landing from "./view/Landing";
import NavbarComponent from "./components/NavbarComponent";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Login />
    </>
  );
}

export default App;
