

# CNN-NEWS React App - One spot solution to tailored to variety of customer needs, redefines news consumption, covering Business, Entertainment, Health, Science, Sports, and Technology. Personalized, reliable, and accessible anytime, anywhere. Join us and stay ahead of the curve.
A web application for displaying real-time news headlines from various categories.

# Table of Contents
Features
Installation
Usage
API Key Setup
Environment Variables
Dependencies
Credits
License

# Features
Category-Based News Feed: View news articles categorized under general, business, entertainment, health, science, sports, and technology.
Dynamic Pagination: Navigate through multiple pages of news articles for each category.
Responsive Design: Responsive layout to ensure optimal viewing experience across various devices.
Error Handling: Graceful handling of errors, ensuring smooth user experience even in adverse conditions.
Styling: Enhanced visual appearance with CSS styling for navigation, news cards, headers, and footers.
Routing: Seamless navigation between different sections of the application using React Router.
Component-Based Architecture: Modular structure with reusable components for improved code organization and maintainability.
API Integration: Integration with the News API to fetch real-time news data from reliable sources.
Enhanced User Performance
LoadingBar: Indicates loading progress to enhance the user experience.
InfiniteScroll: Enables infinite scrolling behavior for seamless content loading.
These features are incorporated to improve user engagement and performance within the application.



# Installation
Clone the GitHub repository:
git clone https://github.com/swatipbk1/SBA_REACT_WEB_APP.git
Navigate to the project directory:
Install dependencies using npm:
npm install
Start the development server:
npm install vite react react-dom @vitejs/plugin-react
Start the development server:
npm run dev

# Usage
Sorted news apps have become indispensable tools for modern individuals seeking efficient and tailored access to a wealth of information. These apps offer personalized content, allowing users to select specific categories or topics of interest and receive relevant news quickly and conveniently.

Sorted news apps cater to a diverse range of industries and sectors, offering tailored content that meets specific informational needs. For instance, business professionals benefit from accessing market trends and financial news, enhancing decision-making and competitiveness. In the science sector, researchers stay updated on scientific breakthroughs and funding opportunities, fostering collaboration and innovation. Sports enthusiasts rely on these apps for real-time updates on games and events, fostering community engagement. Healthcare professionals access the latest medical advancements and public health initiatives, improving patient care and advocacy efforts. Overall, sorted news apps serve as invaluable resources across industries, promoting knowledge sharing, informed decision-making, and community engagement.

# API Key Setup
This application uses the News API to fetch news articles. You need to obtain an API key from the News API website. Once you have the API key, follow the instructions in the Environment Variables section to set it up.

# Environment Variables
Create a .env file in the root directory of the project and add the following environment variable:
REACT_APP_API_KEY=714ef9b8a6ef47d19b4bda6f4f0d100f


# Dependencies
react: A JavaScript library for building user interfaces.
react-dom: Provides DOM-specific methods that can be used at the top level of your React application.
@vitejs/plugin-react: Official Vite plugin for React support.
react-router-dom
dotenv
Bootstrap
react-top-loading-bar: Provides a loading bar component for indicating loading progress.
npm install react-top-loading-bar
react-infinite-scroll-component: Facilitates infinite scrolling behavior to load content dynamically.
npm install react-infinite-scroll-component


# Credits
This project uses the NewsAPI to fetch top headlines from http"//newsapi.org  for our CNN News APP.

# License
This project is licensed under the MIT License.

