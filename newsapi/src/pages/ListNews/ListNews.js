import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "./ListNews.scss";

const ListNews = ({ formData, setFormData }) => {
  localStorage.clear("newArti");
  const [news, setNews] = useState([]);
  useEffect(() => {
    const myDataArray = [];
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "sources=bbc-news&" +
      `apiKey=${process.env.REACT_APP_API_KEY}`;
    const getNews = async (url) => {
      const res = await axios.get(url);
      const news = res.data.articles;
      const news5 = news.slice(0, 5);
      news5.forEach((element) => {
        const myNewsData = {
          _id: uuidv4(),
          author: element.author,
          title: element.title,
          urlToImage: element.urlToImage,
          description: element.description,
          content: element.content,
        };
        myDataArray.push(myNewsData);
      });
      setNews(myDataArray);
    };
    getNews(url);
    if (formData && formData.length !== 0)
      formData.forEach((element) => {
        myDataArray.push(element);
      });
      return () => {
        setFormData([])
      };
    // eslint-disable-next-line
  }, []);
  const removeAllNews = () => setNews([]);
  const removeOneTask = (i) => {
    let filteredArray = news.filter((e) => i !== e._id);
    setNews(filteredArray);
  };
  const renderList = () =>
    news.map((e, index) => {
      return (
        <Card
          i={index}
          key={e._id}
          newsArt={e}
          remove={() => removeOneTask(e._id)}
        />
      );
    });
  return (
    <section className="ListNews">
      {renderList()}
      <button onClick={removeAllNews}>Delete All</button>
    </section>
  );
};

export default ListNews;



