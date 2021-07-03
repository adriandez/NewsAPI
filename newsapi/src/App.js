import { UserProvider } from "../src/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Main />
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
