import "./Card.css";

const Card = ({newsArt}) => {
  return (
    <article>
      <h3>{newsArt.author}</h3>
      <h4>{newsArt.title}</h4>
      <img src={newsArt.urlToImage} alt="news photografic element" />
      <p>{newsArt.content}</p>
      <p>{newsArt.description}</p>
    </article>
  );
}

export default Card