import "./Card.css";

const Card = ({i, key, newsArt, remove}) => {
  return (
    <article>
      <h3>{newsArt.author}</h3>
      <h4>{newsArt.title}</h4>
      <img src={newsArt.urlToImage} alt="news photografic element" />
      <p>{newsArt.description}</p>
      <p>{newsArt.content}</p>
      <button onClick={remove}>Delete</button>
    </article>
  );
}

export default Card