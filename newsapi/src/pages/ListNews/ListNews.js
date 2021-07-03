import React, { Component } from 'react';
import axios from "axios";
import './ListNews.css';

class ListNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[],
    };
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const news = res.data;
      console.log(news);
      this.setState({news})
    });
  }


  render() {
    return (
      <div>NewsList</div>
    );
  }
}

export default ListNews;