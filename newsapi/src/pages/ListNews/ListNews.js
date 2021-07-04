import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Card from './Card'
import './ListNews.css';

const ListNews = ({formData}) => {

  

  const [news, setNews] = useState([]);

  //const [news2, setNews2] = useState({ news2:[...news, ...newsArti] });

  const [newsArti,setNewsArti] = useState({})

  const addNewsArti = (formData) => {
    if (formData) {
      const myFormData = {
        _id: uuidv4(),
        author: formData.author,
        title: formData.title,
        urlToImage: formData.urlToImage,
        description: formData.description,
        content: formData.content,
      };
      setNewsArti(myFormData);
      console.log(newsArti);
    } 
    
  }

  // const addNewsToNews = () =>
  //   news ? setNews2([...news, newsArti]) : "";

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

      news5.forEach(element => {
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
      addNewsArti(formData);
      //addNewsToNews();
    };
    getNews(url);
  }, []);

  // const renderList = () =>
  //   news.map((e, i) => {
  //     return <Card key={i} newsArt={e} />;
  //   });

  return (
    <section>
      <h2>NewsList</h2>
    </section>
  );
}

export default ListNews;