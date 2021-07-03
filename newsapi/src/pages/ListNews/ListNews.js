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
      console.log(news5);
      if (news5.length !== 0 && news5.length !== news.length) setNews(news5);
      
    }
    getNews(url);
  }, []) 
  console.log(news);
  const renderList = () => news.map((e, i) => {
    return <Card key={i} newsArt={e} />;
  })

    return (
      <section>
      <h2>NewsList</h2>
      {renderList()}
      </section>
    );
  }

export default ListNews;