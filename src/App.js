import Navbar from "./modules/Navbar";
import Logo from "./modules/Logo";
import WelcomeText from "./modules/WelcomeText";
import Slider from "./modules/Slider";
import './App.css'
import './modules/main.css'

function App() {
  return (
    <div >
      <Navbar />

      <main>
        <Logo />
        <WelcomeText />
        {/* <Slider /> */}



      </main>
    </div>
  );
}

export default App;
