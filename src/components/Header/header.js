import { Link, Routes, Route } from 'react-router-dom';
import './header.css';
import MyCalculator from '../calculator/calculator';
import MyQuotes from '../quotes/quotes';
import Home from '../home/home';

const Header = () => (
  <>
    <nav>
      <h1>
        <Link to="/" style={{ color: '#fff' }}>
          Math
          <span className="h1-span">magicians</span>
        </Link>
      </h1>
      <ul className="link-holder">
        <li className="links"><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li className="links"><Link to="/calculator" style={{ color: '#fff' }}>Calculator</Link></li>
        <li className="links"><Link to="/quote" style={{ color: '#fff' }}>Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<MyCalculator />} />
      <Route path="/quote" element={<MyQuotes />} />
    </Routes>
  </>
);

export default Header;
