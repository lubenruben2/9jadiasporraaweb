import React from "react";
import "./NewsArticle.css";
function NewsArticle(props) {
  return (
    <div className="news">
      <a href={props.urlToImage}>
        <div className="news__image">
          <img src={props.urlToImage} alt="images" width="350" height="200" />
        </div>
      </a>

      <div className="news__title">{props.title}</div>

      <div className="news__desc">
        {props.description}
        <div className="news__url">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read_more"
          >
            Read more..
          </a>
        </div>
      </div>

      <div className="news__author">
        Author: {"\u00A0"} {"\u00A0"} {props.author}
      </div>

      <div className="news__published">
        Date: {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        {props.publishedAt}
      </div>

      <div className="news__source">
        Source: {"\u00A0"} {"\u00A0"} {"\u00A0"} {props.source.name}
      </div>
    </div>
  );
}

export default NewsArticle;
