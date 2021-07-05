import { UserProvider } from "../src/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Main />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
