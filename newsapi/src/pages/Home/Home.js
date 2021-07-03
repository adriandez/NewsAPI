import "./Home.css";

export default function Home() {
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.elements.name.value,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Please enter your name" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
