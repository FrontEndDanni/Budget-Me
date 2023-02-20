import React, { useState, useEffect } from 'react';
import './newspage.scss';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const url = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&pageSize=6&page=${currentPage}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&pageSize=6&page=${currentPage}`;

    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.log(error.message));
  }, [searchQuery, currentPage]);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
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
           <div className="searchContainer">
              <input
                className="searchBar"
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button className="searchButton" onClick={() => setCurrentPage(1)}>
              Search
            </button>
          </div>
        </div>

        <ul id="article-list" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

          {filteredNews?.map((article, index) => (
            <li className="newsPic" key={index}>
              <img src={article.urlToImage ? article.urlToImage : 'https://cdn-icons-png.flaticon.com/512/9435/9435506.png'} 
              alt={article.title}
              
              
              />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
        <button id="prev" onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <button id="next" onClick={handleNext} disabled={filteredNews?.length < 6}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
