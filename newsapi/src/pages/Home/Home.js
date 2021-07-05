import React, {useContext} from "react";
import { UserContext } from "../../context/UserContext";

import "./Home.scss";

const Home = () => {
  const [user,setUser] = useContext(UserContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = event.target.elements.name.value
    setUser(data)
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
            />
          </label>
          <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Home