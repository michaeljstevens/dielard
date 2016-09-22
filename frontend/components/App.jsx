import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar/navbar_container.js';
import Footer from './footer/footer.jsx';

const App = ({children}) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
