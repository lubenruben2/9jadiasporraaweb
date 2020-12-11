import React, { Component } from "react";
import axios from "axios";
import "./New.css";
import NewsArticle from "./NewsArticle";
import { Container } from "react-bootstrap";

class New extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=46e14988b345447487b13565cf885182`
      )
      .then((res) => {
        console.log(res.data.articles);
        this.setState({ news: res.data.articles });
      });
  };

  render() {
    return (
      <Container className="New">
        <div className="Top">
          <p>Top World-News Headlines:</p>
        </div>
        <div className="MainNews">
          {this.state.news.map((New) => (
            <NewsArticle
              key={New.url}
              author={New.author}
              content={New.content}
              description={New.description}
              publishedAt={New.publishedAt}
              source={New.source}
              title={New.title}
              url={New.url}
              urlToImage={New.urlToImage}
            />
          ))}
        </div>
        <div className="Lower">
          <div className="A"></div>
          <div className="B"></div>
        </div>
      </Container>
    );
  }
}

export default New;
