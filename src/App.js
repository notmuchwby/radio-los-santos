import Navbar from "./modules/Navbar";
import Logo from "./modules/Logo";
import WelcomeText from "./modules/Main";
import './App.css'
import './modules/main.css'

function App() {
  return (
    <div >
      <Navbar />

      <main>
        <Logo />
        <WelcomeText />

        

      </main>
    </div>
  );
}

export default App;
