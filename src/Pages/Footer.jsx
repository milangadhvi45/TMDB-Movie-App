import { Link } from 'react-router-dom';
import '../Stylefolder/Pages.css';


export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">
                            <span className="logo-icon">🎬</span>
                            CineVerse
                        </h2>
                        <p className="footer-tagline">
                            Your ultimate destination for discovering amazing movies
                        </p>
                    </div>

                    <button onClick={scrollToTop} className="scroll-top-btn">
                        ↑ Back to Top
                    </button>
                </div>

                {/* Main Footer Links */}
                <div className="footer-grid">
                    {/* Navigation Links */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Explore</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/popular">Popular</Link></li>
                            <li><Link to="/trending">Trending</Link></li>
                            <li><Link to="/top-rated">Top Rated</Link></li>
                            <li><Link to="/watchlist">My Watchlist</Link></li>
                        </ul>
                    </div>

                    {/* Quick Info */}
                    <div className="footer-column">
                        <h3 className="footer-heading">About</h3>
                        <ul className="footer-links">
                            <li><a href="#about">About CineVerse</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Connect</h3>
                        <ul className="footer-links">
                            <li><a href="https://x.com/Milangadhvi08?t=-C-SwhU8oYtGgfnneMJFSw&s=09" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            <li><a href="https://github.com/milangadhvi45" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Stay Updated</h3>
                        <p className="footer-text">Get the latest movie recommendations</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Your email"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                        <div className="footer-social-icons">
                            <a href="https://x.com/Milangadhvi08?t=-C-SwhU8oYtGgfnneMJFSw&s=09" aria-label="Twitter">🐦</a>
                            <a href="https://instagram.com" aria-label="Instagram">📸</a>
                            <a href="https://facebook.com" aria-label="Facebook">👍</a>
                            <a href="https://youtube.com" aria-label="YouTube">📺</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {currentYear} CineVerse. All rights reserved. | Built with ❤️ by Milan Gadhvi
                        </p>
                        <div className="footer-badges">
                            <span className="badge">Powered by TMDB</span>
                            <span className="badge">React ⚛️</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}