import { v4 as uuidv4 } from "uuid";
import "./Form.scss";

const Form = ({ setFormData }) => {

  const dataTrasfer = (arr) => setFormData(arr);

  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = localStorage.getItem("newArti")
      ? JSON.parse(localStorage.getItem("newArti"))
      : [];
    const data = {
      _id: uuidv4(),
      author: event.target.elements.author.value,
      title: event.target.elements.title.value,
      urlToImage: event.target.elements.urlToImage.value,
      description: event.target.elements.description.value,
      content: event.target.elements.content.value,
    };
    arr.push(data);
    localStorage.setItem("newArti", JSON.stringify(arr));
    dataTrasfer(arr);
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
            name="urlToImage"
          />
        </label>
        <label>
          Description:
          <textarea name="description" rows="4"></textarea>
        </label>
        <label>
          Content:
          <textarea name="content" rows="4"></textarea>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
