import logo from './logo.svg';
import './App.css';

import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section";
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import {Section3} from "./components/Section3";
import {Section4} from "./components/Section4";
import {Footer} from "./components/Footer";
function App() {
  return (
    <div className="App">
      






   <Navbar/>   
   <Section/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Footer/>

    </div>
  );
};

export default App;
