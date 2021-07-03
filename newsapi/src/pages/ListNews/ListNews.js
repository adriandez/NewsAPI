import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card'
import './ListNews.css';

const ListNews = () => {

  const [news,setNews] = useState([])
  
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "sources=bbc-news&" +
      `apiKey=${process.env.REACT_APP_API_KEY}`;
    const getNews = async (url) =>{
      const res = await axios.get(url)
      const news = res.data.articles
      const news5 = news.slice(0,5)
      setNews(news5)
    }
    getNews(url);
  }, []) 

    return (
      <section>
      <h2>NewsList</h2>
      <Card />
      </section>
    );
  }

export default ListNews;