import Navbar from "./modules/Navbar";
import Logo from "./modules/Logo";
import WelcomeText from "./modules/WelcomeText";
import './App.css'
import './modules/main.css'

function App() {
  return (
    <div className="background-slides">
      <Navbar />
      <Logo />
      <WelcomeText />
    </div>
  );
}

export default App;
