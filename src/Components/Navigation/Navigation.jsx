import React from 'react';
import './navigation.css'; // Import CSS file

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CNN</a>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item"><a className="nav-link active" href="/business">Business</a></li>
            <li className="nav-item"><a className="nav-link active" href="/entertainment">Entertainment</a></li>
            <li className="nav-item"><a className="nav-link active" href="/health">Health</a></li>
            <li className="nav-item"><a className="nav-link active" href="/science">Science</a></li>
            <li className="nav-item"><a className="nav-link active" href="/sports">Sports</a></li>
            <li className="nav-item"><a className="nav-link active" href="/technology">Technology</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
