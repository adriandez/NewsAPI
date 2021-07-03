import { BrowserRouter } from "react-router-dom";
import Header from '../src/components/Header'
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
