import React from "react";
import "./Form.css";

const Form = ({setFormData}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      author: event.target.elements.author.value,
      title: event.target.elements.title.value,
      urlToImage: event.target.elements.urlToImage.value,
      description: event.target.elements.description.value,
      content: event.target.elements.content.value,
    };
    setFormData(data)
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
            placeholder="Please enter an image URL"
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
}

export default Form;