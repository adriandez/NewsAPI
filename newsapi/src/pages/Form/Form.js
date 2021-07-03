import "./Form.css";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      image: event.target.elements.image.value,
      age: event.target.elements.age.value,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Author:
          <input type="text" name="author" />
        </label>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="Please enter an image URL"
          />
        </label>
        <label>
          Description:
          <textarea name="description" rows="4"></textarea>
        </label>
        <label>
          Content:
          <textarea name="description" rows="4"></textarea>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
