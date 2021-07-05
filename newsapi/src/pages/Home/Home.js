import React, {useContext} from "react";
import { UserContext } from "../../context/UserContext";

import "./Home.scss";

const Home = () => {
  // eslint-disable-next-line
  const [user, setUser] = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = event.target.elements.name.value;
    setUser(data);
  };

  return (
    <div className="Home">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Home