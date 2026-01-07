# 🎬 CineVerse

<div align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-6.x-CA4245?logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/TMDB-API-01D277?logo=themoviedatabase&logoColor=white" alt="TMDB" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</div>

<div align="center">
  <h3>Your Ultimate Destination for Discovering Amazing Movies</h3>
  <p>A modern, responsive movie discovery platform built with React</p>
  
  [Live Demo](https://cineverseapp-one.vercel.app/)
</div>

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [What I Learned](#what-i-learned)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About

CineVerse is a modern movie discovery platform that allows users to explore trending, popular, and top-rated movies. Built with React and powered by The Movie Database (TMDB) API, it provides a seamless experience for movie enthusiasts to discover, search, and save their favorite films.

### Why CineVerse?

- **🎨 Modern UI/UX**: Clean, Netflix-inspired design with smooth animations
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast & Efficient**: Optimized performance with React hooks and lazy loading
- **🔍 Smart Search**: Instant search results with debouncing
- **💾 Personal Watchlist**: Save and manage your favorite movies locally
- **🌐 Real-time Data**: Always up-to-date with TMDB's extensive movie database

---

## ✨ Features

### Core Features

- 🔥 **Trending Movies** - Discover what's hot this week
- ⭐ **Popular Movies** - See what everyone's watching
- 🏆 **Top Rated** - Explore critically acclaimed films
- 🔍 **Advanced Search** - Find any movie instantly
- 📚 **Personal Watchlist** - Save movies to watch later
- 🎬 **Detailed Movie Info** - Cast, crew, trailers, and more

### Technical Features

- ⚛️ Built with React 18+ and Hooks
- 🛣️ Client-side routing with React Router
- 🎨 Context API for state management
- 🔐 Protected routes and error handling
- 💾 LocalStorage persistence
- 📄 Pagination for efficient data loading
- 🎭 Custom hooks for reusable logic
- 📱 Mobile-first responsive design

---

## 📸 Screenshots

### Desktop View

<div align="center">
  <img src="/Movie_App/src/screenshots/home.png" alt="Desktop Home" width="800"/>
  <p><em>Home Page - Multiple Sections</em></p>
</div>

### Movie Details

<div align="center">
  <img src="/Movie_App/src/screenshots/moviedetails.png" alt="Movie Details" width="800"/>
  <p><em>Detailed Movie Information with Cast & Trailer</em></p>
</div>

### Search & Watchlist

<div align="center">
  <img src="/Movie_App/src/screenshots/search.png" alt="Search" width="400"/>
  <img src="/Movie_App/src/screenshots/watchlist.png" alt="Watchlist" width="400"/>
  <p><em>Search Results & Personal Watchlist</em></p>
</div>

### Mobile View

<div align="center">
  <img src="/Movie_App/src/screenshots/Mobile.png" alt="Mobile" width="300"/>
  <p><em>Fully Responsive Mobile Design</em></p>
</div>

---

## 🛠️ Tech Stack

### Frontend

- **React** (18.x) - UI library
- **React Router DOM** (6.x) - Routing
- **Context API** - State management
- **Custom Hooks** - Reusable logic

### Build Tools

- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### API

- **TMDB API** - Movie data and images

### Styling

- **CSS3** - Custom styling
- **CSS Grid & Flexbox** - Layout
- **CSS Animations** - Smooth transitions

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **TMDB API Key** (free - see instructions below)

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/milangadhvi45/Cineverse
   cd cineverse
```

2. **Install dependencies**

```bash
   npm install
   # or
   yarn install
```

3. **Get your TMDB API Key**

   - Go to [TMDB API](https://www.themoviedb.org/settings/api)
   - Sign up for a free account
   - Navigate to API section
   - Copy your API Key (v3 auth)

4. **Create environment file**

   Create a `.env` file in the root directory:

```bash
   VITE_MOVIE_API_KEY=your_api_key_here
```

5. **Start the development server**

```bash
   npm run dev
   # or
   yarn dev
```

6. **Open your browser**

````
https://cineverseapp-one.vercel.app/```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```env
VITE_MOVIE_API_KEY=your_tmdb_api_key_here
````

> ⚠️ **Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

---

## 📖 Usage

### Browsing Movies

1. Navigate to **Home** to see trending, popular, and top-rated movies
2. Click on any movie card to view detailed information
3. Use the **navigation menu** to browse specific categories

### Searching

1. Use the search bar in the navigation
2. Type your query and press Enter
3. Results appear instantly on the home page

### Managing Watchlist

1. Click the **star icon** on any movie detail page
2. Access your watchlist from the navigation menu
3. Remove movies by clicking the **X button**

### Pagination

1. Scroll to the bottom of Popular/Trending/Top Rated pages
2. Use the pagination controls to navigate through pages
3. Click page numbers or use Previous/Next buttons

---

## 📁 Project Structure

```
cineverse/
├── public/
├── src/
│   ├── Components/
│   │   ├── Navbar.css
│   │
│   │   └── Footer.css
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Searchpage.jsx
│   │   ├── PopularPage.jsx
│   │   ├── TrendingPage.jsx
│   │   ├── TopRatedPage.jsx
│   │   ├── MovieDetails.jsx
|   |   ├── Footer.jsx
|   |   ├── Navbar.jsx
│   │   └── Watchlist.jsx
│   ├── Stylefolder/
│   │   ├── Home.css
│   │   ├── index.css
│   │   ├── Pages.css
│   │   └── Navbar.css
│   ├── Component/
|   |   ├── searchbar.jsx
│   │   └── useMovie.jsx         # Custom hook for API calls
│   ├── MovieContext/
│   │   └── WatchlistContext.jsx # Context for watchlist
│   ├── utils/
│   │   └── weatherIcons.js      # Weather icon mapping
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔌 API Integration

### TMDB API Endpoints Used

```javascript
// Popular Movies
GET /movie/popular?api_key={API_KEY}&page={page}

// Trending Movies
GET /trending/movie/day?api_key={API_KEY}&page={page}

// Top Rated Movies
GET /movie/top_rated?api_key={API_KEY}&page={page}

// Search Movies
GET /search/movie?api_key={API_KEY}&query={query}&page={page}

// Movie Details
GET /movie/{movie_id}?api_key={API_KEY}&append_to_response=credits,videos,similar
```

### Custom Hooks

```javascript
// useMovie.js - Handles all API calls
const {
  FetchMovie, // Top rated
  FetchPopular, // Popular movies
  FetchTrending, // Trending movies
  searchMovie, // Search functionality
  FetchCard, // Movie details
  loading, // Loading state
  error, // Error state
} = useMovie();
```

---

## 📚 What I Learned

Building CineVerse was an incredible learning experience. Here's what I mastered:

### React Concepts

- ✅ **Hooks Mastery**: useState, useEffect, useContext, useCallback, useRef
- ✅ **Context API**: Global state management without prop drilling
- ✅ **Custom Hooks**: Created reusable logic for API calls
- ✅ **React Router**: Dynamic routing, nested routes, URL parameters

### Advanced Topics

- ✅ **API Integration**: Working with RESTful APIs, async/await
- ✅ **Error Handling**: Graceful error messages and loading states
- ✅ **Performance**: Debouncing, lazy loading, pagination
- ✅ **State Management**: Managing complex state across components

### Best Practices

- ✅ **Code Organization**: Component structure, separation of concerns
- ✅ **Responsive Design**: Mobile-first approach, flexible layouts
- ✅ **User Experience**: Loading indicators, error states, empty states
- ✅ **Accessibility**: Semantic HTML, keyboard navigation

### Tools & Workflow

- ✅ **Git & GitHub**: Version control, branching, commits
- ✅ **Environment Variables**: Secure API key management
- ✅ **Build Tools**: Vite for fast development
- ✅ **Debugging**: Browser DevTools, console logging

---

## 🗺️ Roadmap

### Completed ✅

- [x] Home page with multiple sections
- [x] Search functionality
- [x] Movie details page
- [x] Watchlist feature
- [x] Pagination
- [x] Responsive design
- [x] Error handling

### Planned Features 🚀

#### Short Term

- [ ] Infinite scroll (alternative to pagination)
- [ ] Loading skeletons for better UX
- [ ] Movie trailers in modal
- [ ] Filter by genre
- [ ] Sort by rating/date

#### Medium Term

- [ ] User authentication (Firebase)
- [ ] Cloud watchlist sync
- [ ] Movie reviews and ratings
- [ ] Share movies on social media
- [ ] Dark/Light theme toggle

#### Long Term

- [ ] AI-powered recommendations
- [ ] Watch together feature
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] TV Shows integration

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Contact

**Milan Gadhvi**

- Portfolio: [cineverse.com](https://cineverseapp-one.vercel.app/)
- LinkedIn: [Milangadhvi45](https://www.linkedin.com/in/milansinh-gadhvi-9a7607332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Twitter: [@milangadhvi](https://x.com/Milangadhvi08?t=-C-SwhU8oYtGgfnneMJFSw&s=09)
- Email: milansinh01@email.com

**Project Link**: [https://github.com/milangadhvi45/Cineverse](https://github.com/milangadhvi45/Cineverse)

**Live Demo**: [https://cineverseapp-one.vercel.app/](https://cineverseapp-one.vercel.app/)

---

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) - For providing the amazing API
- [React Documentation](https://react.dev/) - For excellent learning resources
- [Vite](https://vitejs.dev/) - For blazing fast development experience
- [Vercel](https://vercel.com/) - For seamless deployment
- Inspiration from Netflix, IMDb, and other streaming platforms

---

## 📊 Project Stats

- **Lines of Code**: ~3,000+
- **Components**: 15+
- **Custom Hooks**: 2
- **API Endpoints**: 5
- **Pages**: 6
- **Development Time**: 4 weeks

---

<div align="center">
  <p>Made with ❤️ and ☕ by Your Name</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

---

## 🔗 Quick Links

- [📖 Documentation](#documentation)
- [🐛 Report Bug](https://github.com/milangadhvi45)
- [💡 Request Feature](https://github.com/milangadhvi45)
- [🤝 Contributing Guidelines](#contributing)
- [📄 License](#license)

---

**Built with React ⚛️ | Powered by TMDB 🎬 | Deployed on Vercel ▲**
