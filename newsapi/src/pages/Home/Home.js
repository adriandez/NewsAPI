import React, {useContext} from "react";
import { UserContext } from "../../context/UserContext";

import "./Home.css";

const Home = () => {
  const [user,setUser] = useContext(UserContext)
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = event.target.elements.name.value

    console.log(user);
    setUser(data)
    console.log(data);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Please enter your name"
            />
          </label>
          <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Home