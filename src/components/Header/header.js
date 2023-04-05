import { Link, Routes, Route } from 'react-router-dom';
import './header.css';
import MyCalculator from '../calculator/calculator';
import MyQuotes from '../quotes/quotes';
import Home from '../home/home';

const Header = () => (
  <>
    <nav>
      <h1>Math magicians</h1>
      <ul className="link-holder">
        <li className="links"><Link to="/">Home</Link></li>
        <li className="links"><Link to="/calculator">Calculator</Link></li>
        <li className="links"><Link to="/quote">Quote</Link></li>
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
