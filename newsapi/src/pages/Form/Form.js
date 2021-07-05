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
    <section className="Form">
      <h3>Create News Content</h3>
      <form onSubmit={handleSubmit}>
        <div className="wrapperForm">
          <input type="text" name="author" placeholder="Author" />
        </div>
        <div className="wrapperForm">
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className="wrapperForm">
          <input type="text" name="urlToImage" placeholder="Image Url" />
        </div>
        <div className="wrapperFormArea">
          <textarea
            name="description"
            rows="4"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="wrapperFormArea">
          <textarea name="content" rows="4" placeholder="Content"></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Form;
