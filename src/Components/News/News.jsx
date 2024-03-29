import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./News.css";
import spinner from "./Spinner.gif";

const API_KEY = import.meta.env.VITE_API_KEY;

// Function to strip HTML tags from a string
function stripHTML(html) {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

const News = ({ category }) => { // Receive category prop
  const [myNews, setMyNews] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Number of articles per page

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true when fetching data
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}` // Use API_KEY constant
      );
      const data = await response.json();
      // Filter out articles with null or undefined image or title or "Unknown" title
      const filteredArticles = data.articles.filter(
        (article) =>
          article.urlToImage !== null &&
          article.urlToImage !== undefined &&
          article.title !== null &&
          article.title !== undefined &&
          article.title !== "Unknown"
      );
      setMyNews(filteredArticles);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]); // Fetch data whenever category changes

  // Function to handle fetching data and setting loading state
  const handleFetchData = () => {
    fetchData();
  };

  // Logic to calculate the index of the first and last articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = myNews.slice(indexOfFirstArticle, indexOfLastArticle);

  // Logic to paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    handleFetchData(); // Fetch data for the new page
  };

  return (
    <div className="mainDiv">
      {/* Conditionally render spinner while loading */}
      {loading ? (
        <img src={spinner} alt="Loading..." />
      ) : (
        // Render articles when data is loaded
        <>
          {currentArticles.map((article, index) => (
            <div className="card" key={index}>
              <img
                src={
                  article.urlToImage ||
                  "https://via.placeholder.com/300x200?text=Image+Not+Available"
                }
                alt="Article"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {article.author || (article.source.name.startsWith('https') ? "Anonymous" : article.source.name)}
                </h5>
                <p className="card-text">{article.title}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFetchData} // Call handleFetchData when "Read More" is clicked
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="pagination">
            {[...Array(Math.ceil(myNews.length / articlesPerPage)).keys()].map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className={`btn ${
                    number + 1 === currentPage ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {number + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

// Add prop type validation
News.propTypes = {
  category: PropTypes.string.isRequired,
};

export default News;
