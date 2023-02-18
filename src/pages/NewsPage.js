import React, { useState, useEffect } from 'react';
import './newspage.scss';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = 'a3db0dce13d243159ac83c34303ef2e6';

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.log(error.message));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div>
      <h1>Business and Finance News</h1>
      <div id="carousel">
        <ul id="article-list" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {newsData.slice(0, 6).map((article, index) => (
            <li className="newsPic" key={index}>
              <img src={article.urlToImage} alt="Article Thumbnail" />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
        <button id="prev" onClick={handlePrev} disabled={activeIndex === 0}>
          Prev
        </button>
        <button id="next" onClick={handleNext} disabled={activeIndex === 4}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
