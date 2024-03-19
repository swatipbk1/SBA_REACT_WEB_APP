import React from 'react';
import './footer.css'; // Import CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="search-form">
              <input type="text" placeholder="Search on CNN" className="search-input" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Experience the CNN News App, your gateway to the most comprehensive and up-to-the-minute updates spanning a multitude of categories. Stay informed with the latest news, insightful analyses, and breaking stories, effortlessly delivered to your fingertips. Whether you are interested in global affairs, business trends, technological innovations, or cultural developments, our app offers a seamless and immersive experience, ensuring you are always ahead of the curve. Download now and embark on a journey of knowledge and enlightenment with CNN, your trusted source for unparalleled journalism..</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/business">Business</a></li>
              <li><a href="/entertainment">Entertainment</a></li>
              <li><a href="/health">Health</a></li>
              <li><a href="/science">Science</a></li>
              <li><a href="/sports">Sports</a></li>
              <li><a href="/technology">Technology</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@cnn.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                <a href="#">Watch</a> | 
                <a href="#">Listen</a> | 
                <a href="#">Live TV</a> | 
                <a href="#">FOLLOW CNN</a> | 
                <a href="#">Sign in</a> | 
                <a href="#">Terms of Use</a> | 
                <a href="#">Privacy Policy</a> | 
                <a href="#">Do Not Sell Or Share My Personal Information</a> | 
                <a href="#">Ad Choices</a> | 
                <a href="#">Accessibility & CC</a> | 
                <a href="#">About</a> | 
                <a href="#">Newsletters</a> | 
                <a href="#">Transcripts</a> | 
                <br />
                &copy; 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.
                <br />
                CNN Sans ™ & © 2016 Cable News Network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
