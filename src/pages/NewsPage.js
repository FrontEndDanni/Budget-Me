import React, { useState, useEffect } from 'react';
import './newspage.scss';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const url = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
      console.log(apiKey);

    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.log(error.message));
  }, [searchQuery]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const filteredNews = newsData?.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="newsContainer">
      <h1 className="newsTitle">Business and Finance News</h1>
      <center><span className="newsSpan">Stay up-to-date with all the latest in business.</span></center>
      <div id="carousel">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search articles"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <ul id="article-list" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {filteredNews?.slice(0, 6).map((article, index) => (
            <li className="newsPic" key={index}>
              <img src={article.urlToImage} 
              alt="Article Thumbnail"
              onError={event=> {
                event.target.src = "https://cdn-icons-png.flaticon.com/512/9435/9435506.png"
                event.onerror = null
              }}
              
              />
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

