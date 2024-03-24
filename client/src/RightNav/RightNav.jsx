import React, { useState, useEffect } from "react";
import "./RightNav.css";
import axios from 'axios';
import NewsItem from './NewsItem/NewsItem'
import ConverterCard from "./ConverterCard/ConverterCard";

const RightNav = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
<<<<<<< HEAD
          "https://newsapi.org/v2/everything?q=bitcoin&blockchain&financefrom=2024-02-09&sortBy=publishedAt&apiKey=b8f21b7a03c24f928daf52140b6e1233"
=======
          "https://newsapi.org/v2/everything?q=crypto&bitcoin&blockchain&financefrom=2024-02-09&sortBy=publishedAt&apiKey=b8f21b7a03c24f928daf52140b6e1233"
>>>>>>> 9841328b846d77b0285eeeb05322083ee04f35c6
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  return (
    <div className="rightnav">
      <div className="box1">
        <div className="title-right">Currency Converter</div>
        <ConverterCard />
      </div>
      <div className="box2">
        <div className="title-right">Top Stories</div>
        <div className="api-news">
          {loading ? (
            <div className="loading-message">Loading news...</div>
          ) : (
            articles.map((article, index) => (
              <div className="NewsSection" key={index}>
                <NewsItem
                  title={article?.title?.slice(0, 50)}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  author={article?.author?.slice(0, 20)}
                  date={article?.publishedAt?.slice(0, 10)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
