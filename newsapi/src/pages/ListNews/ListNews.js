import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card'
import './ListNews.css';

const ListNews = ({formData}) => {

  console.log(formData);

  const [news2, setNews2] = useState([]);

  console.log(news2);

  const [news, setNews] = useState([]);

  console.log(news);

  const [newsArti,setNewsArti] = useState({})

    console.log(newsArti);

  const addNewsArti = () => (formData ? setNewsArti(formData) : "");

  const addNewsToNews = () =>
    news ? setNews2([...news, newsArti]) : "";

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "sources=bbc-news&" +
      `apiKey=${process.env.REACT_APP_API_KEY}`;
    const getNews = async (url) => {
      const res = await axios.get(url);
      const news = res.data.articles;
      const news5 = news.slice(0, 5);
      setNews(news5);
      addNewsArti();
      addNewsToNews();
    };

    getNews(url);
  }, []);

  const renderList = () =>
    news2.map((e, i) => {
      return <Card key={i} newsArt={e} />;
    });

  return (
    <section>
      <h2>NewsList</h2>
      {renderList()}
    </section>
  );
}

export default ListNews;